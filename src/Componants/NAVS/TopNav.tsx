import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp ,
  FaGithub,
} from 'react-icons/fa';
import styles from './navbars.module.css';

const TopNav = () => (
  <Navbar expand="lg" variant="dark" className={styles.topNav} sticky="top">
  <Container fluid>
    <div className="d-flex align-items-center">
      <FaPhoneAlt />
      <span className={styles.phoneText}>+20 1117254520</span>
    </div>

    <Navbar.Toggle aria-controls="topbar-nav" />
    <Navbar.Collapse id="topbar-nav" className="justify-content-end">
      <Nav className="align-items-center">

      

        <Nav.Link href="instagram.com/yousefkhaled5105" className={`${styles.iconLink} ms-3`}>
          <span className="d-none d-lg-inline"><FaInstagram /></span>
          <span className="d-lg-none">Instagram</span>
        </Nav.Link>

        <Nav.Link href="linkedin.com/in/yousef-khaled-589b8128a" className={`${styles.iconLink} ms-3`}>
          <span className="d-none d-lg-inline"><FaLinkedinIn /></span>
          <span className="d-lg-none">LinkedIn</span>
        </Nav.Link>

        <Nav.Link href="https://wa.me/201117254520" className={`${styles.iconLink} ms-3`}>
          <span className="d-none d-lg-inline"><FaWhatsapp /></span>
          <span className="d-lg-none">WhatsApp</span>
        </Nav.Link>

        <Nav.Link href="https://github.com/you333ef" className={`${styles.iconLink} ms-3`}>
          <span className="d-none d-lg-inline"><FaGithub /></span>
          <span className="d-lg-none">GitHub</span>
        </Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

);

export default TopNav;