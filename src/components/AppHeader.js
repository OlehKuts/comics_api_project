import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom-v5-compat';

export const AppHeader = () => {
    return (
        <>
     <Navbar className="bg-body-tertiary justify-content-center mb-3" bg="dark" data-bs-theme="dark" 
     style={{width: "100%"}}>
      <Container className='justify-content-center'>
         <Navbar.Brand className='justify-content-start'>Marvel</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/heroes">Heroes</Nav.Link>
            <Nav.Link as={NavLink} to="/comics">Comics</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      </>
    )
}
