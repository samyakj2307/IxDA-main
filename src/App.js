import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from './components/img/logo.svg'

function App() {
  return (
    <>
    <div className="App">
      <Navbar className="navb"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img className="navlogo" src={logo}  />{' '}
          
        </Navbar.Brand>
        {
/*
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>

            <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
*/}
      </Navbar>
      <div className="content">
        
      </div>
    </div>
    </>
  );
}

export default App;
