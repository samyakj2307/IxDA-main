import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./components/img/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {motion} from "framer-motion";

function App() {
  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 10,
  }
  return (
    <>
      <div className="App">
        <Navbar className="navb" sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand href="/">
            <img className="navlogo" src={logo} />{" "}
          </Navbar.Brand>
          {/*
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
        <div className="flex-container">
          <div  className="vl" id="vl1">
            <div style={{ color: "#F3EFE6", width: "50vw" }} className="head ">
              <h1
                style={{
                  width: "100%",
                  fontSize: "80px",
                  fontWeight: "bold",
                  lineHeight:"140%"
                }}
              >
                The new standard <br />
                of <span style={{ color: "#C02D33" }}>Design.</span>
              </h1>
            </div>
            <div className="head2" style={{ color: "white", width: "50vw" }}>
              <br />
              <p style={{fontFamily: "IBM Plex Mono"}}>We are IxDA Vellore. We are sabisdubckudbsidu<br/>cbcdskubcse kbdsckubc dsbcdsucsbdudscbdsubcdsujbc</p>
            </div>
          </div>
          <div  className="vl" id="vl2">
            <motion.div 
              className="circle"
              animate={{ rotate:360 }}
              transition ={spinTransition}>
            </motion.div>
              <span className="inner-text">Emphasize</span>
          </div>
          <div  className="vl" id="vl3"></div>
          </div>
        </div>
    </>
  );
}

export default App;
