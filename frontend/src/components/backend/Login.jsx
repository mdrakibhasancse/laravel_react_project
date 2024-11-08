import React, { useContext } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';


const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const res = await fetch("http://127.0.0.1:8000/api/login",{
            method : "POST",
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if(result.status === false){
            toast.error(result.message)
        }else{
            
            const userInfo = {
                id : result.id,
                token : result.token
            }

            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            login(userInfo);
            navigate('/admin/dashboard');
        }

      }

    return (
        <div>
            <Header></Header> 
             <div className="container d-flex justify-content-center py-5">
                 <div className="login-form py-5">
                    <div className="card">
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h4>Login Here...</h4>
                                <div className="mb-1">
                                    <label htmlFor="" className='form-lavel'></label>
                                    <input
                                    {
                                        ...register("email", {  
                                            required: "This email field is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            } 
                                        })
                                     }
                                     type="text" placeholder='Email' className={`form-control ${errors.email && 'is-invalid'}`}/>
                                     {errors.email && <span className='text-danger'>{errors.email?.message}</span>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="" className='form-lavel'></label>
                                    <input
                                    {
                                        ...register("password", {  
                                            required: "This password field is required",
                                        })
                                    }
                                    type="password" placeholder='Password' className={`form-control ${errors.password && 'is-invalid'}`}/>
                                    {errors.password && <span className='text-danger'>{errors.password?.message}</span>}
                                </div>
                                <button type='submit' className='btn btn-primary'>Login</button>
                            </form>
                        </div>
                    </div>
                 </div>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;