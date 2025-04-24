import React from 'react';
import StyleLogin from './loginprocess.module.css';
import Logo from '../../assets/Logo (Stroke) (1).svg';
import bg_Left from '../../assets/LoginBG.svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginProcess = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   let navigate=useNavigate()
   let  naviregister=()=>{
    navigate('/Register')
   }
   let  naviForget=()=>{
    navigate('/Forget')
   }
   const Submission = async (data: any) => {
   
    try {
      const response = await axios.post('https://upskilling-egypt.com:3007/api/auth/login', data);
      console.log('Response:', response);
      if (response.status === 200 && response.data ) {
        console.log('Response data:', response.data); 
       
        toast.success("Login successful!");
      
       navigate('/AuthLayout/Landing')
      
       let Token=response.data.data.profile
     const  decodet=Token
       localStorage.setItem('data_Mushafer',JSON.stringify(decodet) )
       window.location.reload()
       console.log(localStorage.getItem('data_Mushafer'))

       
      } else {
        toast.error(response.data.message || "This account has not been registered before.");
      }
    } catch (error: any) {
      console.error('Error during login:', error);
      toast.error(error.response?.data?.message || "An error occurred during login.");
    }
  };

  return (
    <div className={`row ${StyleLogin.LoginProcessContainer}`}>
      
      <div className={`col-lg-6 col-sm-12 w-50 ${StyleLogin.LEFTLogin}`}></div>

      <div className={`col-lg-6 col-sm-12 d-flex h-100 m-auto  flex-column justify-content-center align-items-center ${StyleLogin.Rightogin}`}>
        <img src={Logo} alt="logo" className="mb-4" />

        <div className="d-flex flex-column justify-content-start align-items-start w-75">
          <h6 className="text-muted">Welcome back!</h6>
          <h5 className="fw-bold mb-4">Login to your account</h5>
        </div>

        <form className="w-75 mt-2" onSubmit={handleSubmit(Submission)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: 'Please enter your email address.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address."
                }
              })}
              id="email"
              placeholder="john@mail.com"
            />
            {errors.email && <small>{errors.email.message}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", {
                required: 'Please enter your password.',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  message: "Use 1 big letter, 1 small, a number, a symbol, and at least 8 characters."
                }
              })}
              id="password"
              placeholder="********"
            />
            {errors.password && <small>{errors.password.message}</small>}
          </div>

          <div className="form-check mb-4">
            
            <label className="form-check-label"
             style={{
             
              color: 'rgba(98, 81, 221, 1)',
              backgroundColor: 'transparent',
          
            }}
            htmlFor="rememberMe"onClick={naviForget} >Forget Password?</label>
          </div>

          <button type="submit" className="btn w-100 mt-2" style={{ backgroundColor: 'rgba(239, 107, 74, 1)', color: 'white' }}>
            Login
          </button>
          <button
            type="button"
            onClick={naviregister}
            className="btn w-100 mt-2"
            style={{
              border: '1px solid rgba(98, 81, 221, 1)',
              color: 'rgba(98, 81, 221, 1) ',
              backgroundColor: 'transparent',
              transition: '0.3s'
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginProcess;
