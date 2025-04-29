import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './explore.module.css';
import oneImg from '../../assets/Rectangle 11.svg';
import twoImg from '../../assets/Rectangle 11 (1).svg';
import threeImg from '../../assets/Rectangle 11 (2).svg';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Explore = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div className="container">
      {/* الجزء العلوي بنفس الـ UI */}
      <div className={styles.Top_part}>
        <div className={styles.Topleft}>
          <h6>Categories</h6>
          <h4>Explore our Top Categories</h4>
        </div>
        <div className={styles.Topright}>
          {/* ربط زر الرجوع بالسلايدر */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <FaCircleArrowLeft />
          </button>
          {/* زر التقديم */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', marginLeft: '10px' }}
          >
            <FaCircleArrowRight style={{ color: 'rgba(237, 85, 59, 1)' }} />
          </button>
        </div>
      </div>

      {/* هنا السلايدر */}
      <Slider {...settings} ref={sliderRef}  className={`${styles.KpeerExplore} ${styles.noColumnOnMobile}`}>
        <div className={` ${styles.KpeerExplore1}`}>
          <div className={styles.spectific1}>
            <img src={oneImg} alt="Higher Education" />
            <h6>Higher Education</h6>
          </div>
        </div>
        <div className={`${styles.KpeerExplore2}`}>
          <div className={styles.spectific2}>
            <img src={twoImg} alt="Management Books" />
            <h6>Management Books</h6>
          </div>
        </div>
        <div className={` ${styles.KpeerExplore3}`}>
          <div className={styles.spectific3}>
            <img src={threeImg} alt="Engineering Books" />
            <h6>Engineering Books</h6>
          </div>
        </div>
        <div className={` ${styles.KpeerExplore3}`}>
          <div className={styles.spectific3}>
            <img src={oneImg} alt="Engineering Books" />
            <h6>Engineering Books</h6>
          </div>
        </div>      <div className={` ${styles.KpeerExplore3}`}>
          <div className={styles.spectific3}>
            <img src={twoImg} alt="Engineering Books" />
            <h6>Engineering Books</h6>
          </div>
        </div>      <div className={` ${styles.KpeerExplore3}`}>
          <div className={styles.spectific3}>
            <img src={oneImg} alt="Engineering Books" />
            <h6>Engineering Books</h6>
          </div>
        </div>
      </Slider>

      <button style={{ marginTop: '10px' }} className={styles.viewMoreBtn}>
        View more <FaCircleArrowRight />
      </button>
    </div>
  );
};

export default Explore;
