import React, { useContext } from 'react';
import styles from './profile.module.css';    
import profilePictue from '../../assets/profile_picture.svg';
       // للكونتينر وصورة البروفايل
import 'bootstrap/dist/css/bootstrap.min.css';
import { MYCONTEXT } from '../Context';
import { useNavigate } from 'react-router-dom';
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  iat: number;
  gender: string;
  exp: string;
}


const Profile: React.FC = () => {
   let statedata =useContext(MYCONTEXT)
   let NaviChange=useNavigate()
   let FUNchange=()=>{
    NaviChange('/AuthLayout/change')
   }

  return (
    <div className={`mt-sm-5 ${styles.coco} ${styles.profileContainer}`}>
     <img src={profilePictue} className={` ${styles.profileImage}`} alt="Profile" />


      <div className={`container ${styles.usersContainer}`}>
        <form>
          <div className="row mt-5">
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={statedata?.first_name}
                readOnly
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your First Name"
              />
              <p className={styles.errormessage}></p>
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={statedata?.last_name}
                readOnly
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your Last Name"
              />
              <p className={styles.errormessage}></p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={statedata?.email}
                readOnly
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your Email"
              />
              <p className={styles.errormessage}></p>
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="age" className={styles.label}>
              Status
              </label>
              <input
                type="text"
                id="age"
                value={statedata?.status}
               
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your Age"
              />
              <p className={styles.errormessage}></p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="phone" className={styles.label}>
              Role
              </label>
              <input
                type="text"
                id="phone"
                value={statedata?.role}
                readOnly
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your Gender"
              />
              <p className={styles.errormessage}></p>
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="birthDate" className={styles.label}>
                 ID
              </label>
              <input
                type="text"
                id="birthDate"
                value={statedata?._id}
                readOnly
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your Birth Date"
              />
              <p className={styles.errormessage}></p>
            </div>
          </div>
          <button
          type='button'
          onClick={FUNchange}
  className="text-center m-auto d-flex mt-1"
  style={{
    fontSize: '14px',
    padding: '5px',
    fontWeight: '700',
    color: '#000',
    outline: 'none',
    border: 'none',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    background: ' rgba(229, 229, 229, 1)'
  }}
>

  Change Password
</button>

        </form>
      </div>
    </div>
  );
};

export default Profile;
