import React, { useState, useRef, useMemo } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiUrl, fileUrl, token } from '../../common/http';
import JoditEditor from 'jodit-react';

const Edit = ({placeholder}) => {

    const editor = useRef(null);
	const [description, setDescription] = useState('');
    const [service, setService] = useState('');
    const [imageId, setImageId] = useState(null);
    const params = useParams();

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || '',
    }), [placeholder]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiUrl+"service/edit/"+params.id,{
                method: 'GET',
                headers: {
                    'Content-Type'  : 'application/json',
                    'Accept'        : 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },
            });
    
            const result = await res.json();
            setDescription(result.data.description);
            setService(result.data);
            return{
                title: result.data.title,
                excerpt: result.data.excerpt,
                status: result.data.status
            }
        }
    });
    const navigate = useNavigate();

    const onSubmit = async (data) => {
       
        const newData = { ...data, 'description' : description, 'imageId' : imageId }
        console.log(newData);

        const res = await fetch(apiUrl+'service/update/'+params.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: JSON.stringify(newData)
        });

        const result = await res.json();

        if (result.status) {
            toast.success(result.message);
            navigate('/admin/services');
        } else {
            result.errors && Object.values(result.errors).forEach((msg) => toast.error(msg[0]));
            toast.error(result.message || "Update failed");
        }
        
    }

    const handleFile = async (e) => {

        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('image', file)

       

        await fetch(apiUrl+'temp/image/store', {
            method: 'POST',
            headers: {
                'Accept'        : 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if(result.status == false){
                toast.error(result.errors.image[0]);
            }else{
                console.log(result.data.id);
                setImageId(result.data.id)
            }
        });
    }

    

    return (
        <div>
            <Header />
            <main>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>

                        <div className="col-md-9">
                            <div className="card shadow border-0">
                                <div className="card-header d-flex justify-content-between">
                                    <h4>Service Edit</h4>
                                    <Link to="/admin/services" className='btn btn-primary small'>Back</Link>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="" className='form-label'>Title</label>
                                            <input
                                                {...register
                                                 ("title", { required: "This title field is required" })
                                                }
                                                type="text"
                                                placeholder='Enter title'
                                                className={`form-control ${errors.title && 'is-invalid'}`}
                                            />
                                            {errors.title && <span className='text-danger'>{errors.title.message}</span>}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className='form-label'>Excerpt</label>
                                            <textarea
                                                placeholder='Enter excerpt'
                                                {...register("excerpt")}
                                                className='form-control'
                                            ></textarea>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className='form-label'>Description</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={description}
                                                config={config}
                                                tabIndex={1}
                                                onBlur={newDescription => setDescription(newDescription)}
                                                onChange={() => {}}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className='form-label me-2'>Image</label>
                                            <input onChange={handleFile}
                                                type="file"
                                                className='form-control'
                                            />

                                            {
                                               service.image && <img className='mt-2' src={fileUrl + 'uploads/services/small/' + service.image} alt="" width={50} height={50} />
                                            }
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className='form-label'>Status</label>
                                            <select
                                                {...register("status")}
                                                className='form-control'
                                            >
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>

                                        <button type='submit' className='btn btn-primary small'>Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Edit;