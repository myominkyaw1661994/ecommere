import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" collapseOnSelect variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><i className='fas fa-shopping-cart m-2'></i>Cart</Nav.Link>
                        <Nav.Link href="/login"><i className='fas fa-user m-2'></i>Sing In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
