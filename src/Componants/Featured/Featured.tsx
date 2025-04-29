import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import FEFE from './featured.module.css';
import imgbook_left from '../../assets/book.svg';
import { FaArrowRight } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Book2 from '../../assets/book3 4.svg';
import Book3 from '../../assets/book16 1.svg';

// Slick styles (لا تغيير في ستايلك)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Featured = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [imgbook_left, Book2, Book3];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  const prev = () => sliderRef.current?.slickPrev();
  const next = () => sliderRef.current?.slickNext();

  return (
    <div className={FEFE.FEFE_SECTION} style={{ position: 'relative' }}>
      {/* الأسهم */}
      <ArrowLeft
        size={24}
        onClick={prev}
        style={{ position: 'absolute', top: '50%', left: '16px', color: 'rgba(237,85,59,1)', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 10 }}
      />
      <ArrowRight
        size={24}
        onClick={next}
        style={{ position: 'absolute', top: '50%', right: '16px', color: 'rgba(237,85,59,1)', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 10 }}
      />

      {/* السطر: صور ثابتة جانبياً */}
      <div className={`row align-items-center mt-4 ${FEFE.faturated_KPeerhom}`}>
        {/* ← الصورة المتحركة فقط */}
        <div className={`col-lg-6 col-md-6 col-sm-12 ${FEFE.dauter_Left}`}>  
          <Slider ref={sliderRef} {...settings} className={FEFE.sliderWrapper}>
            {images.map((src, idx) => (
              <div key={idx} className={FEFE.imageSlide}>
                <div className={FEFE.image}>
                  <img src={src} alt={`Book ${idx + 1}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* ← المحتوى الثابت */}
        <div className={`col-lg-6 col-md-6 col-sm-12 ${FEFE.dauter_right}`}>  
          <div className={FEFE.details}>
            <h2>Featured book</h2>
            <div className={FEFE.details_Eldetails}>
              <p>By Timbur Hood</p>
              <h5>Birds gonna be happy</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br/> eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <h6>$ 45.00</h6>
              <button className={FEFE.btn}>View more <FaArrowRight/></button>
            </div>
          </div>
        </div>
      </div>

      {/* النقاط */}
      <Row>
        <Col xs={12}>
          <div className={`${FEFE.paginationDots} d-flex justify-content-center mt-4`}>
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`${FEFE.dot} ${idx === currentSlide ? FEFE.active : ''}`}
                onClick={() => sliderRef.current?.slickGoTo(idx)}
                style={{ cursor: 'pointer' }}
              ></span>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Featured;