import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

function Topbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/" className='ms-5'>ToDoList</Navbar.Brand>
                <Nav
                    className="justify-content-end w-100 p-1 me-5"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Topbar