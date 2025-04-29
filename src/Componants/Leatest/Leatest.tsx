import React from 'react';
import styles from './leatest.module.css';
import img1 from '../../assets/Rectangle 44.svg';
import img2 from '../../assets/Rectangle 38.svg';
import img3 from '../../assets/Rectangle 45.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Leatest: React.FC = () => (
  <div className={`mt-4 container ${styles.LeatestContainer}`}>      
   <div className="text-center">
  {/* العنصر اللي عرضه بيكون على قد محتواه */}
  <div className={`d-inline-block ${styles.Title}`}>
    <small>Read our articles</small>
    <h4>Latest Articles</h4>
  </div>
</div>


    <div className={`row ${styles.Row}`}>        
      {[
        { src: img1, alt: 'Article 1' },
        { src: img2, alt: 'Article 2' },
        { src: img3, alt: 'Article 3' }
      ].map((item, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-4">
          <img src={item.src} alt={item.alt} className="img-fluid" />
          <div className={styles.Details}>
            <small>2 Aug, 2021</small>
            <h5>Reading Books Always Makes The<br />Moments Happy</h5>
            <hr />
            <div className={styles.SocialIcons}>
            <FaFacebookF />
  <FaTwitter />
  <FaInstagram />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Leatest;