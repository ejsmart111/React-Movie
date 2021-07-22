import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './AppNavbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppNavbar() {
    return (
        <> 
            <Navbar bg="dark" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">React Movie Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link to="/trending_this_week">Movies</Nav.Link>
                        {/* <Nav.Link href="#link">TV Shows</Nav.Link> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        </>
    )
}
