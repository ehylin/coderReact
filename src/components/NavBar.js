import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ico from '../../src/logo.svg'

const NavBar = () => {
    return ( 
        <Navbar className='navBarContent'  expand="lg">
        <Container fluid>
            <div className='ico'>
            <img src={ico} alt="logo" width="40" />
            </div>
       
          <Navbar.Collapse id="navbarScroll ">
            <Nav
              className="nav"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='btnNavbar' href="#action1">Inicio</Nav.Link>
              <Nav.Link className='linkNavbar' href="#action2">Vehiculo</Nav.Link>
              <Nav.Link className='linkNavbar' href="#action3">Electronica</Nav.Link>
              <Nav.Link className='linkNavbar' href="#action4">Libros</Nav.Link>
            </Nav>
            <Form className="d-flex left ">
              <button className='btnNavbar p-2'>Login</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default NavBar;