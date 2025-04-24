import React from 'react'
import StyleLogin from '../Login/loginprocess.module.css';

import Logo from '../../assets/Logo (Stroke) (1).svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const Changepass = () => {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let SaveChange = async (data) => {
    try {
      // 1) جلب التوكن من التخزين المحلي
      const token = localStorage.getItem('data_Mushafer');
      if (!token) {
        // لو مفيش توكن متسجل
        toast.error('مفيش توكن، رجاءً سجّل دخول تاني', {
          autoClose: 1000,
          theme: 'dark',
          icon: '❌',
        });
        return;
      }
  
      // 2) إرسال الطلب مع هيدر المصادقة
      const response = await axios.post(
        'https://upskilling-egypt.com:3007/api/auth/change-password',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // 3) التعامل مع النتيجة
      if (response.status === 200 && response.data) {
        toast.success('تم تغيير كلمة المرور بنجاح!', {
          autoClose: 1000,
          theme: 'dark',
          icon: '✅',
        });
      } else {
        toast.error(
          `فشل تغيير كلمة المرور: ${response.data?.message || 'خطأ غير معروف'}`,
          {
            autoClose: 1000,
            theme: 'dark',
            icon: '❌',
          }
        );
      }
    } catch (error) {
      // 4) لو حصل خطأ في الشبكة أو حالة 401/403
      console.log('SaveChange error:', error.response || error);
      toast.error(
        `فشل تغيير كلمة المرور: ${
          error.response?.data?.message ||
          error.message ||
          'حصل خطأ في الاتصال'
        }`,
        {
          autoClose: 1000,
          theme: 'dark',
          icon: '❌',
        }
      );
    }
  };
  








  return (
    <div>    <div className={`row ${StyleLogin.LoginProcessContainer}`}>
    <div className={`col-lg-6 col-sm-12 w-50 ${StyleLogin.LEFTLogin}`}></div>

    <div className={`col-lg-6 col-sm-12 d-flex h-100 m-auto flex-column justify-content-center align-items-center ${StyleLogin.Rightogin}`}>
      <img src={Logo} alt="logo" className="mb-4" />

      <div className="d-flex flex-column justify-content-start align-items-start w-75">
        <h6 className="text-muted">Welcome back!</h6>
        <h5 className="fw-bold mb-4">Change Your Password Easily  </h5>
      </div>

      <form className="w-75 mt-2" onSubmit={handleSubmit(SaveChange)} >
      <div className="mb-3">
          <label htmlFor="password" className="form-label"  style={{ fontSize: '14px', fontWeight: 700 }}>Password</label>
          <input type="password"
           {...register("password_new", {
            required: 'Please enter your password.',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "Use 1 big letter, 1 small, a number, a symbol, and at least 8 characters."
            }
          })}
         
          className="form-control" id="password" placeholder="********" />
           {errors.password_new && <small style={{ color: 'red', fontWeight: 700,fontSize: '12px' }}>{errors.password_new.message}</small>}
        </div>
       
      <div className="mb-3">
          <label htmlFor="password"  className="form-label"  style={{ fontSize: '14px', fontWeight: 700 }}>Old Password</label>
          <input type="password" className="form-control" id="Old-password" 
           {...register("password", {
            required: 'Please enter your password.',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "Use 1 big letter, 1 small, a number, a symbol, and at least 8 characters."
            }
          })}
          placeholder="********" />
           {errors.password && <small style={{ color: 'red', fontWeight: 700 ,fontSize: '12px'}}>{errors.password.message}</small>}
        </div>
    
        <button type="submit" className="btn w-100 mt-2" style={{ backgroundColor: 'rgba(239, 107, 74, 1)', color: 'white' }}>
          Save
        </button>
       
      </form>
    </div>
  </div></div>
  )
}

export default Changepass