import React from 'react';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import styles from './footer.module.css';
import LOGOFOOTER from '../../../assets//sample logo 1 (1).svg'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <img src={LOGOFOOTER} alt="Logo" />
            <p>
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon}>
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linksColumn}>
              <h3>COMPANY</h3>
              <a href="#">HOME</a>
              <a href="#">ABOUT US</a>
              <a href="#">BOOKS</a>
              <a href="#">NEW RELEASE</a>
              <a href="#">CONTACT US</a>
              <a href="#">BLOG</a>
            </div>
            
            <div className={styles.linksColumn}>
              <h3>IMPORTENT LINKS</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">FAQs</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {currentYear} Arihant. All Rights Reserved.
          </div>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
