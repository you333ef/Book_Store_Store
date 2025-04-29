import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Interface_Stylest from './interface.module.css';
import IMAGE from '../../assets/Book_interFace.svg';

const InterFace = () => {
  return (
    <section
      className={`${Interface_Stylest.carouselSection} d-flex align-items-center justify-content-center`}
    >
      <Container fluid className={Interface_Stylest.container}>
        {/* ─── navigation arrows ───────────────────────────────────────── */}
        <div className={Interface_Stylest.navigationArrows}>
          <button className={Interface_Stylest.arrowLeft} aria-label="Previous slide">
            <ArrowLeft />
          </button>
          <button className={Interface_Stylest.arrowRight} aria-label="Next slide">
            <ArrowRight />
          </button>
        </div>

        {/* ─── content row ─────────────────────────────────────────────── */}
        <Row className={`${Interface_Stylest.contentRow} justify-content-center justify-content-lg-start`}>
          {/* image */}
          <Col
            lg={{ span: 6, order: 2 }}
            xs={{ span: 12, order: 1 }}
            className={`${Interface_Stylest.imageCol} d-flex justify-content-center`}
          >
            <div className={Interface_Stylest.bookImageWrapper}>
              <img
                src={IMAGE}
                alt="Book cover - The Assignment"
                className={Interface_Stylest.bookImage}
              />
            </div>
          </Col>

          {/* text */}
          <Col
            lg={{ span: 6, order: 1 }}
            xs={{ span: 12, order: 2 }}
            className={`${Interface_Stylest.textCol} text-center text-lg-start`}
          >
            <div className={Interface_Stylest.textContent}>
              <h6 className={Interface_Stylest.title}>Ipsum Dolor Si</h6>
              <p className={Interface_Stylest.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet,
                libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend.
                Amet, quis urna, a eu.
              </p>
              <button className={Interface_Stylest.readMoreBtn}>
                READ MORE <span className={Interface_Stylest.arrow}>→</span>
              </button>
            </div>
          </Col>
        </Row>

        {/* ─── pagination dots centered under everything ───────────────── */}
        <Row>
          <Col xs={12}>
            <div className={`${Interface_Stylest.paginationDots} d-flex justify-content-center mt-4`}>
              <span className={`${Interface_Stylest.dot} ${Interface_Stylest.active}`}></span>
              <span className={Interface_Stylest.dot}></span>
              <span className={Interface_Stylest.dot}></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InterFace;
