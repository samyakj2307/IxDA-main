import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
    const intervalID = setInterval(change, 2355);
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
          {/*}
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className="navpos" href="#blog">Blog</Nav.Link>
            <Nav.Link className="navpos" href="#about-us">About Us</Nav.Link>
            <Nav.Link className="navpos" href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          */}
        </Navbar>
        <div className="line l1"></div>
        <div className="line l2"></div>
        <div className="line l3"></div>
        <div className="line l4"></div>
        <div className="flex-container">
          <div className="vl" id="vl1">
            <div style={{ color: "#F3EFE6" }} className="head">
              <h1 className="new-standard-design" >
                The new standard <br />
                of <span className={text[counter]}>Design.</span>
              </h1>
              <p style={{ fontFamily: "IBM Plex Mono", color: "#F3EFE6", fontSize: "20px" }}>
                Changing the future of design.
              </p>
            </div>
            <br />
            <br />
            <br />
            <svg
              className="arrowd"
              width="16"
              height="121"
              viewBox="0 0 16 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.2929 120.707C7.68342 121.098 8.31659 121.098 8.70711 120.707L15.0711 114.343C15.4616 113.953 15.4616 113.319 15.0711 112.929C14.6805 112.538 14.0474 112.538 13.6569 112.929L8.00001 118.586L2.34315 112.929C1.95263 112.538 1.31946 112.538 0.928937 112.929C0.538413 113.319 0.538413 113.953 0.928937 114.343L7.2929 120.707ZM7 4.37114e-08L7.00001 120L9.00001 120L9 -4.37114e-08L7 4.37114e-08Z"
                fill="#C02D33"
              />
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
          <h1>
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
          style={{ color: "#F3EFE6", marginLeft: "5%" }}
          className="head4"
        >
          <h1>
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
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="footer fixed">
        <div className="socialf">
          <a href="">
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0H4C3.07205 0.000992641 2.18238 0.37006 1.52622 1.02622C0.87006 1.68238 0.500993 2.57205 0.5 3.5V18.5C0.500993 19.428 0.87006 20.3176 1.52622 20.9738C2.18238 21.6299 3.07205 21.999 4 22H25C25.928 21.999 26.8176 21.6299 27.4738 20.9738C28.1299 20.3176 28.499 19.428 28.5 18.5V3.5C28.499 2.57205 28.1299 1.68238 27.4738 1.02622C26.8176 0.37006 25.928 0.000992641 25 0ZM24.1138 5.78938L15.1138 12.7894C14.9382 12.9258 14.7223 12.9999 14.5 12.9999C14.2777 12.9999 14.0618 12.9258 13.8862 12.7894L4.88625 5.78938C4.78051 5.70952 4.69169 5.60945 4.62496 5.49497C4.55823 5.3805 4.51491 5.2539 4.49753 5.12254C4.48015 4.99118 4.48905 4.85767 4.52371 4.72978C4.55837 4.60189 4.6181 4.48216 4.69944 4.37755C4.78077 4.27294 4.88208 4.18554 4.99749 4.12043C5.11289 4.05532 5.24008 4.01379 5.37168 3.99825C5.50327 3.98272 5.63664 3.9935 5.76403 4.02996C5.89142 4.06642 6.0103 4.12783 6.11375 4.21062L14.5 10.7331L22.8862 4.21062C23.096 4.05226 23.3596 3.98281 23.6201 4.01728C23.8806 4.05175 24.117 4.18738 24.2783 4.39483C24.4396 4.60228 24.5128 4.86488 24.482 5.12585C24.4512 5.38682 24.3189 5.62518 24.1138 5.78938Z"
                fill="#C02D33"
              />
            </svg>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.3331 4.33313C23.8789 4.33774 25.3601 4.95385 26.4531 6.04689C27.5462 7.13993 28.1623 8.62109 28.1669 10.1669V21.8331C28.1623 23.3789 27.5462 24.8601 26.4531 25.9531C25.3601 27.0462 23.8789 27.6623 22.3331 27.6669H10.6669C9.12109 27.6623 7.63993 27.0462 6.54689 25.9531C5.45385 24.8601 4.83774 23.3789 4.83313 21.8331V10.1669C4.83774 8.62109 5.45385 7.13993 6.54689 6.04689C7.63993 4.95385 9.12109 4.33774 10.6669 4.33313H22.3331ZM22.3331 2H10.6669C6.175 2 2.5 5.675 2.5 10.1669V21.8331C2.5 26.325 6.175 30 10.6669 30H22.3331C26.825 30 30.5 26.325 30.5 21.8331V10.1669C30.5 5.675 26.825 2 22.3331 2Z"
                fill="#C02D33"
              />
              <path
                d="M24.0831 10.1665C23.737 10.1665 23.3987 10.0639 23.1109 9.87158C22.8231 9.67928 22.5988 9.40597 22.4663 9.0862C22.3339 8.76643 22.2992 8.41456 22.3668 8.0751C22.4343 7.73563 22.6009 7.42381 22.8457 7.17907C23.0904 6.93433 23.4023 6.76765 23.7417 6.70013C24.0812 6.63261 24.4331 6.66726 24.7528 6.79972C25.0726 6.93217 25.3459 7.15647 25.5382 7.44426C25.7305 7.73204 25.8331 8.07039 25.8331 8.4165C25.8336 8.64646 25.7887 8.87424 25.7009 9.08678C25.6132 9.29933 25.4843 9.49244 25.3217 9.65504C25.1591 9.81765 24.966 9.94653 24.7534 10.0343C24.5409 10.1221 24.3131 10.167 24.0831 10.1665ZM16.5 11.3328C17.423 11.3328 18.3253 11.6065 19.0928 12.1193C19.8602 12.6321 20.4584 13.3609 20.8116 14.2137C21.1649 15.0665 21.2573 16.0048 21.0772 16.9101C20.8971 17.8154 20.4527 18.6469 19.8 19.2996C19.1473 19.9523 18.3157 20.3968 17.4105 20.5768C16.5052 20.7569 15.5668 20.6645 14.7141 20.3113C13.8613 19.958 13.1324 19.3599 12.6196 18.5924C12.1068 17.8249 11.8331 16.9226 11.8331 15.9996C11.8345 14.7623 12.3266 13.576 13.2015 12.7011C14.0764 11.8262 15.2627 11.3341 16.5 11.3328ZM16.5 8.99963C15.1155 8.99963 13.7622 9.41017 12.611 10.1793C11.4599 10.9485 10.5627 12.0418 10.0328 13.3208C9.50303 14.5999 9.36441 16.0074 9.63451 17.3653C9.9046 18.7231 10.5713 19.9704 11.5503 20.9494C12.5292 21.9283 13.7765 22.595 15.1344 22.8651C16.4922 23.1352 17.8997 22.9966 19.1788 22.4668C20.4579 21.937 21.5511 21.0398 22.3203 19.8886C23.0895 18.7375 23.5 17.3841 23.5 15.9996C23.5 14.1431 22.7625 12.3626 21.4497 11.0499C20.137 9.73713 18.3565 8.99963 16.5 8.99963Z"
                fill="#C02D33"
              />
            </svg>
            &nbsp;&nbsp;&nbsp;
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2606 0H2.8925C1.61563 0 0.5 0.91875 0.5 2.18062V25.6006C0.5 26.8694 1.61563 28 2.8925 28H26.2538C27.5375 28 28.5 26.8619 28.5 25.6006V2.18062C28.5075 0.91875 27.5375 0 26.2606 0ZM9.17938 23.3394H5.16813V10.8675H9.17938V23.3394ZM7.3125 8.97125H7.28375C6 8.97125 5.16875 8.01562 5.16875 6.81938C5.16875 5.60125 6.02188 4.66813 7.33438 4.66813C8.64688 4.66813 9.45 5.59438 9.47875 6.81938C9.47813 8.01562 8.64688 8.97125 7.3125 8.97125ZM23.8394 23.3394H19.8281V16.52C19.8281 14.8863 19.2444 13.77 17.7931 13.77C16.6844 13.77 16.0281 14.52 15.7363 15.2506C15.6269 15.5131 15.5975 15.8706 15.5975 16.2356V23.3394H11.5863V10.8675H15.5975V12.6031C16.1813 11.7719 17.0931 10.5756 19.215 10.5756C21.8481 10.5756 23.84 12.3113 23.84 16.0531L23.8394 23.3394Z"
                fill="#C02D33"
              />
            </svg>
            &nbsp;&nbsp;&nbsp;
            <svg
              width="31"
              height="24"
              viewBox="0 0 31 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.5 2.84376C29.3747 3.33273 28.184 3.65488 26.9656 3.80001C28.246 3.05025 29.2089 1.85911 29.6737 0.45001C28.4632 1.15788 27.141 1.65456 25.7638 1.91876C25.1838 1.31097 24.4863 0.827451 23.7137 0.497601C22.9411 0.167752 22.1095 -0.00154208 21.2694 1.0584e-05C17.8681 1.0584e-05 15.1156 2.71251 15.1156 6.05626C15.1132 6.52136 15.1665 6.98508 15.2744 7.43751C12.8354 7.32317 10.4472 6.701 8.26249 5.6108C6.07777 4.52059 4.14468 2.98636 2.58687 1.10626C2.04036 2.02759 1.75133 3.07879 1.75 4.15001C1.75 6.25001 2.84563 8.10626 4.5 9.19376C3.51983 9.1705 2.55974 8.91107 1.70125 8.43751V8.51251C1.70125 11.45 3.82625 13.8938 6.63875 14.45C6.10986 14.591 5.56486 14.6624 5.0175 14.6625C4.62911 14.6632 4.24161 14.6255 3.86062 14.55C4.6425 16.9563 6.91813 18.7063 9.61375 18.7563C7.42336 20.4443 4.73414 21.3567 1.96875 21.35C1.47789 21.3493 0.987478 21.3201 0.5 21.2625C3.31324 23.0589 6.5834 24.0091 9.92125 24C21.2563 24 27.4487 14.7688 27.4487 6.76251C27.4487 6.50001 27.4419 6.23751 27.4294 5.98126C28.6313 5.1263 29.6711 4.06383 30.5 2.84376Z"
                fill="#C02D33"
              />
            </svg>
          </a>
          
        </div>
        <div className="textf" style={{textAlign: 'center'}}>Made with ❤ by IxDA-Vellore️</div>

      </div>
    </>
  );
}

export default App;
