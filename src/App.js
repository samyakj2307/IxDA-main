import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import a from "./components/img/a.svg";
import b from "./components/img/b.svg";
import c from "./components/img/c.svg";
import d from "./components/img/d.svg";
import e from "./components/img/e.svg";

import arrow from "./components/img/arrow.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { motion } from "framer-motion";

function App() {
  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 10,
  };
  const text = ["a","b","c","d","e"];
  const ctext = ["ca","cb","cc","cd","ce"];
  const itext = [a,b,c,d,e];
  const circ = ["Empathise", "Define", "Ideate", "Prototype", "Test"];

  const [counter,setCounter]=useState(0);
  const [i,seti]=useState(circ[counter]);
  const [x,setx]=useState(text[counter]);
  const [y,sety]=useState(ctext[counter]);
  const [z,setz]=useState(itext[counter]);
  const [call,setCall]=useState(true);

  
  useEffect(() => {
    if(call){
      change();
      setCall(false);
    }
    const intervalID = setInterval(change, 1950);
    return () => clearInterval(intervalID);
  },[change,useState],);
  
  // componentDidMount() {
  //  const interval = setInterval(change(), 2000);
  // };
  // componentWillUnmount(){
  //   clearInterval(interval);
  // };

  function change(){
    console.log(text[counter]);
    setCounter(counter+1);
    if(counter==circ.length-1){
      setCounter(0);
    }
    
    seti(circ[counter]);
    setx(text[counter]);
    sety(ctext[counter]);
    setz(itext[counter]);

   
  }
  return (
    <>
      <div className="App">
        <Navbar className="navb" sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand href="/">
            <img className="navlogo" src={itext[counter]} />{" "}
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
          <div className="vl" id="vl1">
            <div style={{ color: "#F3EFE6", width: "50vw" }} className="head ">
              <h1
                style={{
                  width: "100%",
                  fontSize: "80px",
                  fontWeight: "bold",
                  lineHeight: "140%",
                }}
              >
                The new standard <br />
                of <span className={text[counter]} >Design.</span>
              </h1>
            </div>
            <div className="head2" style={{ color: "#F3EFE6", width: "50vw" }}>
              <br />
              <p style={{ fontFamily: "IBM Plex Mono" }}>
                Changing the future of design.
              </p>
            </div>
            <br/><br/><br/><br/>
            <img className="arrowd" src={arrow} />

            
          </div>
          <div className="vl" id="vl2">
            <motion.div
              className="circle"
              id={ctext[counter]}
              animate={{ rotate: 360 }}
              transition={spinTransition}
            ></motion.div>
            <span className="inner-text" id={text[counter]}>{i}</span>
          </div>
          <div className="vl" id="vl3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
