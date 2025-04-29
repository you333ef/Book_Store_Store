import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import STY_rY from './release.module.css';
import Book1 from '../../assets/book16 1.svg';
import Book2 from '../../assets/book3 4.svg';
import Book3 from '../../assets/book16 1.svg';
import Book4 from '../../assets/book.svg';
import { Col, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  appendDots: dots => (
    <div className={`${STY_rY.paginationDots} d-flex justify-content-center mt-4`}>
      <ul>{dots}</ul>
    </div>
  ),
  customPaging: i => <span className={STY_rY.dot}></span>,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const RELEASE = () => {
  const books = [Book1, Book2, Book3, Book4];

  return (
    <div className={`mt-4 ${STY_rY.papa_rY}`}>
      <div className={`d-block flex-column text-center p-3 m-auto ${STY_rY.Top_rY}`}>
        <small>Some quality items</small>
        <h4>New Release Books</h4>
      </div>

      <div className={`mt-4 ${STY_rY.Unedr_rY}`}>
        <Slider {...settings} className={STY_rY.Unedr_TAQSEEMA}>
          {books.map((Book, idx) => (
            <div key={idx} className={`px-2 ${STY_rY.COLS}`}>
              <div className={STY_rY.Image}>
                <img src={Book} alt={`Book ${idx + 1}`} />
                <button className={STY_rY.addBtn}>ADD TO CART</button>
              </div>
              <div className={STY_rY.details}>
                <h5>Simple way of piece life</h5>
                <small>Armor Ramsey</small>
                <p>$ 40.00</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <hr className={STY_rY.divider} />

      <div className={`d-flex justify-content-between align-items-center ${STY_rY.paginationContainer}`}>
        <div></div> {/* مساحة فارغة على اليسار */}
        <Row>
          <Col xs={12}>
            <div className={`${STY_rY.paginationDots} d-flex justify-content-center mt-4`}>
              <span className={`${STY_rY.dot} ${STY_rY.active}`}></span>
              <span className={STY_rY.dot}></span>
              <span className={STY_rY.dot}></span>
              <span className={STY_rY.dot}></span>

            </div>
          </Col>
        </Row>
        <div className={STY_rY.viewMoreBtn_div}>
        <h6 className={STY_rY.viewMoreBtn}>View More</h6>
        <FaArrowRight className={STY_rY.ICON_PADAEY} />

        </div>
      </div>
    </div>
  );
};

export default RELEASE;
