import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiHeart, FiMenu } from "react-icons/fi";
import { FaRegUser  } from 'react-icons/fa'; 

import style from './navbars.module.css'
import { useNavigate } from 'react-router-dom';
const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "BOOKS", href: "/books" },
  { label: "NEW RELEASE", href: "/new-release" },
  { label: "CONTACT US", href: "/contact" },
  { label: "BLOG", href: "/blog" },
  { label: "Profile", href: "#", icon: FaRegUser },
  { label: "CART", href: "#", icon: FiShoppingCart },
  { label: "FAVORITES", href: "#", icon: FiHeart },
];

const Down_Navs = () => {
  const [isOpen, setIsOpen] = useState(false);
 



 let naviLanding=useNavigate()
  let funProfie=()=>{
    naviLanding('/AuthLayout/profile')
  }

  return (
    <nav className="w-100 border-bottom border-secondary position-relative">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
        <div className="d-none d-md-block">
            <div className="rounded-circle bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '1rem', color: '#6c757d' }}>
             <span style={{  color: 'rgb(16, 15, 15)' }}>U</span>
            </div>
          </div>
          {/* Desktop Icons */}
        

          {/* Desktop Menu Items */}
          <div className="d-none d-md-flex justify-content-center flex-grow-1">
            <div className="d-flex gap-4">
              {menuItems.slice(0, 6).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-secondary text-decoration-none fw-medium small"
                >
                 <h6 className={style.MENUUUo}>{item.label} |</h6>
                </a>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <FaRegUser onClick={funProfie}  className="fs-5 text-secondary cursor-pointer" />
            <FiShoppingCart className="fs-5 text-secondary cursor-pointer" />
            <FiHeart className="fs-5 text-secondary cursor-pointer" />
          </div>

          {/* Mobile Navigation */}
          <div className="d-flex d-md-none justify-content-between w-100">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn p-2 text-secondary"
            >
              <FiMenu className="fs-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="position-absolute mobile-menu-transition top-100 start-0 w-100 bg-white border-bottom border-secondary shadow-sm z-3">
          <div className="d-flex flex-column align-items-center gap-3 py-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-secondary text-decoration-none fw-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Down_Navs;
