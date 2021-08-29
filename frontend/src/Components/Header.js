import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" collapseOnSelect variant='dark' expand="lg">
                <Container>
                    <a herf="/">
                        <Navbar.Brand >Shop</Navbar.Brand>
                    </a>    
                    <Nav className="ml-auto">
                        <a href="/cart">
                            <Nav.Link><i className='fas fa-shopping-cart m-2'></i>Cart</Nav.Link>
                        </a>
                        <a href="/login">
                            <Nav.Link><i className='fas fa-user m-2'></i>Sing In</Nav.Link>
                        </a>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
