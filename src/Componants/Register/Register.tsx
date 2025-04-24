import React from 'react'
import StyleLogin from '../Login/loginprocess.module.css'
import StyleRegister from './register.module.css'
import Logo from '../../assets/Logo (Stroke) (1).svg'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {

let {register,handleSubmit, formState: { errors }}=useForm()
let naviregister=useNavigate()
let navilogin=()=>{
  naviregister('/LoginProcess')
}
let submic = async (dataregister) => {
  try {
    // أضف حقل role للبيانات
    const dataWithRole = { ...dataregister, role: "Customer" };

    let response = await axios.post(
      "https://upskilling-egypt.com:3007/api/auth/register",
      dataWithRole
    );
    console.log(response);

    if (response.status === 200 && response.data) {
      naviregister("/LoginProcess");
      toast.success("Registration successful!");
    } else {
      toast.error("Something went wrong during registration.");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    toast.error(
      error.response?.data?.message || "An error occurred during registration."
    );
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
          <h6 className="text-muted">Create new acccount!</h6>
          <h5 className="fw-bold mb-4">Register</h5>
        </div>
    
        <form className="w-75 mt-2" onSubmit={handleSubmit(submic)}>
          {/* First & Last Name side by side */}
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                style={{ backgroundColor: "#eaf1ff" }}
                className={`form-control ${StyleRegister.tendai}`}
                placeholder="First Name"
                {...register('first_name',
                  {
                    required: 'Please enter your First Name.'
                    , pattern: {
                      value: /^[A-Za-z]{2,30}$/,
                      message: "Use only letters (2–30 chars)."
                    }
                  }
                 )}
                 
                 
              />
               {errors.first_name && <small>{errors.first_name.message}</small>}
            </div>
            
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                style={{ backgroundColor: "#eaf1ff" }}
                className={`form-control ${StyleRegister.tinashe}`}
                placeholder="Last Name"
                {...register('last_name', {
                  required: 'Please enter your Last Name.',  pattern: {
                    value: /^(?=.{2,50}$)[A-Za-z]+(?:[ \'-][A-Za-z]+)*$/,
                    message: "Use letters, spaces, hyphens or apostrophes (2–50 chars)."
                  }
                })}
                
              />
               {errors.last_name && <small>{errors.last_name.message}</small>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="john@mail.com"
              {...register("email", {
                required: 'Please enter your email address.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address."
                }
              })}
            />
             {errors.email && <small>{errors.email.message}</small>}
          </div>
    
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: 'Please enter your password.',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  message: "Use 1 big letter, 1 small, a number, a symbol, and at least 8 characters."
                }
              })}
              className="form-control"
              placeholder="********"
            />
          {errors.password && <small>{errors.password.message}</small>}

          </div>
    
          <div className="form-check mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-check-input"
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember Me
            </label>
          </div>
    
          <button
            type="submit"
            className="btn w-100 mt-2"
            style={{
              backgroundColor: 'rgba(239, 107, 74, 1)',
              color: 'white'
            }}
          >
            Register
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
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
