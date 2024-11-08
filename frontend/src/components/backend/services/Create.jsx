import React, { useState, useRef, useMemo } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { apiUrl, token } from '../../common/http';
import JoditEditor from 'jodit-react';

const Create = ({placeholder}) => {
    const editor = useRef(null);
    const [description, setDescription] = useState('');
    const [imageId, setImageId] = useState(null);

    const {
        register,
        handleSubmit,
        formState: {errors} 
    } = useForm();

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || '',
    }), [placeholder]);


    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newData = { ...data, 'description' : description, 'imageId' : imageId }
        const res = await fetch(apiUrl+'service/store', {
            method: 'POST',
            headers: {
                'Content-Type'  : 'application/json',
                'Accept'        : 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: JSON.stringify(newData)
        });

        const result = await res.json();

        if (result.status === true) {
            toast.success(result.message);
            navigate('/admin/services');
        } else {
            if (result.status === false) {
                Object.keys(result.errors).forEach((field) => {
                    toast.error(result.errors[field][0]);
                });
            } else {
                toast.error(result.message);
            }
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
                                    <h4>Service Create</h4>
                                    <Link to="/admin/services" className='btn btn-primary small'>Back</Link>
                                </div>
                                <div className="card-body">
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
                                                onChange={newDescription => {}}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className='form-label me-2'>Image</label>
                                            <input onChange={handleFile}
                                                type="file"
                                                className='form-control'
                                            />
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

                                        <button  type='submit' className='btn btn-primary small'>Create</button>
                                    </form>
                                </div>
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

export default Create;