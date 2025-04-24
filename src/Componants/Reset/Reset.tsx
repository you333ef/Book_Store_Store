import React from 'react';
import StyleLogin from '../Login/loginprocess.module.css';
import Logo from '../../assets/Logo (Stroke) (1).svg';
import './reset.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';


const Reset = () => {
let naviLoginReset=useNavigate()
let {register,handleSubmit,formState:{errors}}=useForm()
let submitReset=async(data)=>{
  console.log(data)
  
  //TO_DO:Api intigration 
  try {
    
    let response=await axios.post('https://upskilling-egypt.com:3007/api/auth/reset-password',data)

    if(response.status===200 && response.data){
      naviLoginReset('/LoginProcess')
         toast.success('Saved successfully!', {
                autoClose: 1000,
                theme:'dark',
                icon: '✅',
              });
    }
  } catch (error) {
    naviLoginReset('/LoginProcess')
    toast.error('OTP invalid. Please try again.', {
      autoClose: 1000,
      theme:'dark',
      icon: '❌',
    });
  }
}










  return (
    <div className={`row ${StyleLogin.LoginProcessContainer}`}>
      <div className={`col-lg-6 col-sm-12 w-50 ${StyleLogin.LEFTLogin}`}></div>

      <div
        className={`
          col-lg-6
          col-sm-12
          d-flex
          h-100
          m-auto
          flex-column
          justify-content-center
          align-items-center
          ${StyleLogin.Rightogin}
        `}
      >
        <img src={Logo} alt="logo" className="mb-4" />

        <div className="d-flex flex-column justify-content-start align-items-start w-75">
          <h6 className="text-muted">Reset Your Password Now !</h6>
          <h5 className="fw-bold mb-4">Reset Password</h5>
        </div>

        <form className="w-75 mt-2" onSubmit={handleSubmit(submitReset)}>
          <div className="mb-3">
            
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              {...register('email',{required:'Please enter your email address.',
                pattern:{
                  value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:'Please enter a valid email address.'
                }
                
              }
            )}
              
            />
           {errors.email && (
  <small style={{ color: 'red', fontWeight: '500',fontSize:'12px' }}>
    {errors.email.message}
  </small>
)}

          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">OTP</label>
            <input
              type="number"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              {...register('otp',{required:'Please enter your OTP',
                pattern:{
                  value:/^[0-9]{6}$/,
                  message:'Please enter a valid OTP'
                }
                
              }
            
)}
            />
            {errors.otp && <small style={{ color: 'red', fontWeight: '500',fontSize:'12px' }}>{errors.otp.message}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Password</label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              {...register("password", {
                required: 'Please enter your password.',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  message: "Use 1 big letter, 1 small, a number, a symbol, and at least 8 characters."
                }
              })}
            />
            {errors.password && <small style={{ color: 'red', fontWeight: '500',fontSize:'12px' }}>{errors.password.message}</small>}
          </div>

          <button
            type="submit"
            className="btn w-100 mt-2"
            style={{
              backgroundColor: 'rgba(239, 107, 74, 1)',
              color: 'white'
            }}
          >
            Save Changes
          </button>

          <button
            type="button"
            className="btn w-100 mt-2"
            style={{
              border: '1px solid rgba(98, 81, 221, 1)',
              color: 'rgba(98, 81, 221, 1)',
              backgroundColor: 'transparent',
              transition: '0.3s'
            }}
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;