import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <Navbar
      expand="lg"
      expanded={isExpanded}
      onToggle={() => setIsExpanded(prev => !prev)}
      fixed="top"
      className={`py-3 ${scrolled ? 'navbar-scrolled' : ''}`}
      bg="light"
      variant="light"
    >
      <Container>
        {isHome ? (
          <ScrollLink
            to="home"
            smooth={true}
            duration={300}
            offset={-50}
            className="navbar-brand fw-bold text-primary fs-4"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsExpanded(false)}
          >
            SmileCare
          </ScrollLink>
        ) : (
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold text-primary fs-4"
            onClick={() => setIsExpanded(false)}
          >
            SmileCare
          </Navbar.Brand>
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            {isHome ? (
              <>
                <Nav.Link
                  as={ScrollLink}
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="mx-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsExpanded(false)}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="doctors"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="mx-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsExpanded(false)}
                >
                  Doctors
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="testimonials"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="mx-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsExpanded(false)}
                >
                  Testimonials
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="contact"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="mx-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsExpanded(false)}
                >
                  Contact
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/" className="mx-2" onClick={() => setIsExpanded(false)}>
                Back to Home
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/login" className="mx-2" onClick={() => setIsExpanded(false)}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="mx-2" onClick={() => setIsExpanded(false)}>
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
