import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap/NavDropdown';
import { Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={require(`./image/asset 0.png`)}></img>
                    </Navbar.Brand>
                    <Col lg={6}>
                    </Col>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="me-auto my-2 my-lg-0 fw-bold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='text-danger ' as={Link} to='/' >Home</Nav.Link>
                            <Nav.Link href="#action2" as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link href="#action2" as={Link} to='/faq'>Faq</Nav.Link>
                            <Nav.Link href="#action2" as={Link} to='/blog'>Blog</Nav.Link>



                        </Nav>
                        <Form className="d-flex ">

                            <Button variant="outline-danger "as={Link } to='/contact'>Contact</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}
export default Header;