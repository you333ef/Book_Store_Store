import React, { useEffect } from 'react';
import StyleLogin from '../Login/loginprocess.module.css';
import Logo from '../../assets/Logo (Stroke) (1).svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './forget.module.css';

const Forget = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submit = async (data) => {
    try {
    
      const response = await axios.post(
        'https://upskilling-egypt.com:3007/api/auth/forgot-password',
        { email: data.email }
      );
      console.log('Response:', response);

      if (response.status === 200 && response.data) {
        toast.success('Link sent!', {
          autoClose: 1000,
          theme:'dark',
          icon: '✅',
        });
        
        navigate('/Reset');
      
      } else {
        toast.error(response.data.message || ' Something went wrong.');
      }
    } catch (error) {
   
      toast.error('has been no previous registration.', {
        autoClose: false,
      });
      

      navigate('/LoginProcess')
    }
  };

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
          <h6 className="text-muted">Forgot your password?</h6>
          <h5 className="fw-bold mb-4">Reset Password</h5>
        </div>

        <form className="w-75 mt-2" onSubmit={handleSubmit(submit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Please enter your email address.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address.'
                }
              })}
            />
            {errors.email && <small>{errors.email.message}</small>}
          </div>

          <button
            type="submit"
            className="btn w-100 mt-2"
            style={{
              backgroundColor: 'rgba(239, 107, 74, 1)',
              color: 'white'
            }}
          >
          Send Code
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
            onClick={() => navigate('/LoginProcess')}
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forget;