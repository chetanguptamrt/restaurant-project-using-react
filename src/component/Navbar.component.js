import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <Navbar className='navbar-dark bg-dark' expand="md">
            <Navbar.Brand>Resto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav me-auto mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/create'>Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/list'>List</Link>
                    </li>
                    {localStorage.getItem('login')
                        ? <li className="nav-item">
                            <Link className="nav-link active" to='/logout'>Logout</Link>
                        </li>
                        : <li className="nav-item">
                            <Link className="nav-link active" to='/login'>Login</Link>
                        </li>}
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent