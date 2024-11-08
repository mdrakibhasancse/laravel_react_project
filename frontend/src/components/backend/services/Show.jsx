import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { toast } from 'react-toastify';
import { apiUrl, token } from '../../common/http';
import { Link } from 'react-router-dom';


const Show = () => {
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        const res = await fetch(apiUrl+"services",{
            'method'  : 'GET',
            'headers' : {
                'Content-Type'  : 'application/json',
                'Accept'        : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });
        const result = await res.json();
        setServices(result.data);
    }


    useEffect(() => {
        fetchServices()
    }, [])

    const deleteService = async (id) => {
        if(confirm('Are you sure you want to delete?')){
            const res = await fetch(apiUrl+'service/destroy/'+id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                }
            });
    
            const result = await res.json();
            if(result.status == true){
              const newServices =  services.filter(service =>service.id != id);
              setServices(newServices);
              toast.success(result.message);
            }else{
                toast.error(result.message);
            }
        }
    }

    return (
        <div>
            <Header></Header>
                <main>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-3">
                                <Sidebar></Sidebar>
                            </div>

                            <div className="col-md-9">
                                <div className="card shadow border-0">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4>ALL Services</h4>
                                        <Link to="/admin/services/create" className='btn btn-primary'>Create</Link>
                                    </div>
                                    <div className="card-body d-flex justify-content-center align-items-center">
                                        <table className='table table-bordered table-striped'>
                                           <thead>
                                               <tr>
                                                  <th>#ID</th>
                                                  <th>Title</th>
                                                  <th>Slug</th>
                                                  <th>Status</th>
                                                  <th>Action</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                            { services && services.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.slug}</td>
                                                        <td>
                                                            {
                                                            (item.status == 1) ? "Active" : "Inactive"
                                                            }
                                                        </td>
                                                        <td>
                                                            <Link to={`/admin/services/edit/${item.id}`} className='btn btn-warning btn-sm'>Edit</Link>
                                                            <Link onClick={()=>{deleteService(item.id)}} className='btn btn-danger btn-sm ms-2'>Delete</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                             
                                           </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
               </main>
            <Footer></Footer>
        </div>
    );
};

export default Show;