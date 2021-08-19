import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import { teamData } from "./teamData";
import Member from "./components/Member";
import a from "./components/img/e.svg";
import b from "./components/img/a.svg";
import c from "./components/img/b.svg";
import d from "./components/img/c.svg";
import e from "./components/img/d.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { motion } from "framer-motion";

function App() {
  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 12,
  };
  const text = ["a", "b", "c", "d", "e"];
  const ctext = ["ca", "cb", "cc", "cd", "ce"];
  const itext = [a, b, c, d, e];
  const circ = ["Empathise", "Define", "Ideate", "Prototype", "Test"];

  const [counter, setCounter] = useState(0);
  const [i, seti] = useState(circ[counter]);
  const [x, setx] = useState(text[counter]);
  const [y, sety] = useState(ctext[counter]);
  const [z, setz] = useState(itext[counter]);
  const [call, setCall] = useState(true);

  useEffect(() => {
    if (call) {
      change();
      setCall(false);
    }
    const intervalID = setInterval(change, 2400);
    return () => clearInterval(intervalID);
  }, [change, useState]);

  // componentDidMount() {
  //  const interval = setInterval(change(), 2000);
  // };
  // componentWillUnmount(){
  //   clearInterval(interval);
  // };

  function change() {
    console.log(text[counter]);
    setCounter(counter + 1);
    if (counter == circ.length - 1) {
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
            <img className="navlogo" src={itext[counter]} alt="logo" />{" "}
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
            <div style={{ color: "#F3EFE6" }} className="head">
              <h1
                style={{
                  width: "100%",
                  fontSize: "80px",
                  fontWeight: "bold",
                  lineHeight: "140%",
                }}
              >
                The new standard <br />
                of <span className={text[counter]}>Design.</span>
              </h1>
              <p style={{ fontFamily: "IBM Plex Mono", color: "#F3EFE6" }}>
                Changing the future of design.
              </p>
            </div>
            <br />
            <br />
            <br />
            <svg className="arrowd" width="16" height="121" viewBox="0 0 16 121" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.2929 120.707C7.68342 121.098 8.31659 121.098 8.70711 120.707L15.0711 114.343C15.4616 113.953 15.4616 113.319 15.0711 112.929C14.6805 112.538 14.0474 112.538 13.6569 112.929L8.00001 118.586L2.34315 112.929C1.95263 112.538 1.31946 112.538 0.928937 112.929C0.538413 113.319 0.538413 113.953 0.928937 114.343L7.2929 120.707ZM7 4.37114e-08L7.00001 120L9.00001 120L9 -4.37114e-08L7 4.37114e-08Z" fill="#C02D33"/>
            </svg>

            <br />
            <br />
          </div>
          <div className="vl" id="vl2">
            <motion.div
              className="circle"
              id={ctext[counter]}
              animate={{ rotate: 360 }}
              transition={spinTransition}
            ></motion.div>
            <span className="inner-text" id={text[counter]}>
              {i}
            </span>
          </div>
          {/* <div className="vl" id="vl3"></div> */}
        </div>

        <div className="who-are-we-container">
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              color: "#F3EFE6",
              width: "100%",
              fontSize: "80px",
              fontWeight: "bold",
              lineHeight: "140%",
              letterSpacing: "1px",
              outline:"none",
              display:"inline",
            }}
          >
            <span style={{ color: "#c02d33",display: "inline" }}>Who</span> are we?
          </h1>

          <div className="head3" style={{ color: "#F3EFE6" }}>
            <br />
            <p style={{ fontFamily: "IBM Plex Mono" }}>
              We are a bunch of passionate and diligent students who believe in
              the capacity of being creative problem solvers. IxDA is a place
              where people use design to develop their creative potential and
              hone/enhance their problem solving skills.
            </p>
          </div>
        </div>

        <div
          style={{ color: "#F3EFE6", width: "50vw", marginLeft: "5%" }}
          className="head4"
        >
          <h1
            style={{
              width: "100%",
              fontSize: "80px",
              fontWeight: "bold",
              lineHeight: "140%",
              marginTop: "350px"
            }}
          >
            The <span style={{ color: "#c02d33" }}>Team</span>
          </h1>
          <br />
        </div>
        <div className="team">
          {teamData
            .sort(
              ({ id: previousID }, { id: currentID }) => previousID - currentID
            )
            .map((data) => (
              <Member data={data} key={`${data.id}`} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
