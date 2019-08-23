import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

class Menu extends React.Component{
    render(){
        return(
            <Nav variant="tabs" className="justify-content-center" activeKey="/">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Progress" id="nav-dropdown">
                    <LinkContainer to="/benchprogress">
                        <NavDropdown.Item>Bench Press</NavDropdown.Item>
                    </LinkContainer>
                   
                    <LinkContainer to="/squatprogress">
                        <NavDropdown.Item>Squat</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/ohpprogress">
                        <NavDropdown.Item>Overhead press</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/dliftprogress">
                        <NavDropdown.Item>Deadlift</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/bbrowprogress">
                        <NavDropdown.Item>Barbell Row</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/weightprogress">
                        <NavDropdown.Item>Weight</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
            </Nav>);
    }
}

export default Menu;