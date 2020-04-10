import React, { useEffect, useState } from "react";
import BoxModal from "./components/Box-modal";

import logo from "./img/logo.png";
import "./css/index.css";
import Home from "./components/home";
import Anxiety from "./components/Anxiety";
import Bipolar from "./components/Bipolar";
import Ptsd from "./components/Ptsd";
import Schizophrenia from "./components/schizophrenia";
import Stress from "./components/stress-disorder";
import Treatment from "./components/Treatment";
import Insurance from "./components/insurance";
import Faqs from "./components/Faqs";
import About from "./components/About";
import Form from "./components/Form";
import hamburger from "./img/hamburger.png";

//admin
import Register from "./components/admin/register"
import Login from "./components/admin/login"



import Top from "./components/ScrollToTop";

import { Route, NavLink, Link } from "react-router-dom";


function App(props) {
  const [navActive, setActive] = useState(false);
  const [navActive2, setActive2] = useState(false);

  const [phoneNavState, setPhoneNavState] = useState(true);
  const [boxModalState, setboxModalState] = useState(false);
  const toggleTrueFalse = () => setPhoneNavState(!phoneNavState);

  if (boxModalState) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <div className="cover">
      <div id="top" className="container">
        <header className="header">
          <nav
            className="nav nav__desktop"
            onMouseOut={() => {
              setActive(false);
              setActive2(false);
            }}
          >
            <NavLink className="nav__link" activeClassName="active" to="/home">
              Home
            </NavLink>
            <NavLink className="nav__link" to="/about">
              About
            </NavLink>

            <NavLink
              onMouseOver={() => setActive(true)}
              className="nav__link"
              to="/Anxiety#meadow"
            >
              Mental-Health&darr;
              <div
                onMouseOut={() => setActive(false)}
                className={`nav__block  ${navActive ? "u-top" : ""}`}
              >
                <NavLink className="nav__link" to="/Anxiety#meadow">
                  Anxiety
                </NavLink>
                <NavLink className="nav__link" to="/bipolar#meadow">
                  Bipolar
                </NavLink>
                <NavLink className="nav__link" to="/ptsd#meadow">
                  PTSD
                </NavLink>
                <NavLink className="nav__link" to="/schizophrenia#meadow">
                  Shizophrenia
                </NavLink>
                <NavLink className="nav__link" to="/stress#meadow">
                  Stress disorder
                </NavLink>
              </div>
            </NavLink>

            <a className="nav__logo-link" activeClassName="a" href="#">
              <img src={logo} alt="logo" className="nav__logo" />
            </a>

            <NavLink className="nav__link" to="/treatment#meadow">
              Treatment
            </NavLink>
            <NavLink
              className="nav__link"
              onMouseOver={() => setActive2(true)}
              to="/--"
            >
              Admission&darr;
              <div
                onMouseOut={() => setActive2(false)}
                className={`nav__block  ${navActive2 ? "u-top" : ""}`}
              >
                <NavLink className="nav__link" to="/insurance#meadow">
                  Insurance eligibility
                </NavLink>
                <NavLink className="nav__link" to="/faqs#meadow">
                  FAQS
                </NavLink>
              </div>
            </NavLink>
            <NavLink className="nav__link" to="/contact">
              Contact
            </NavLink>
          </nav>

          {/* phone nav */}
          <nav
            className={`nav  nav__phone ${phoneNavState ? "nav__fix" : ""}`}
            onMouseOut={() => {
              setActive(false);
              setActive2(false);
            }}
          >
            <div className="nav__phone__container">
              {/* <a className="nav__phone__logo-link" activeClassName="a" href="#">
            </a> */}

              <img src={logo} alt="logo" className="nav__logo" />
              <img
                onClick={toggleTrueFalse}
                src={hamburger}
                alt="logo"
                className="nav__hamburger"
              />
            </div>
            <NavLink
              onClick={toggleTrueFalse}
              className={`nav__link    ${
                phoneNavState ? "nav__link--phone" : ""
              }  `}
              activeClassName="active"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              onClick={toggleTrueFalse}
              className={`nav__link    ${
                phoneNavState ? "nav__link--phone" : ""
              }  `}
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              onMouseOver={() => setActive(true)}
              activeClassName="active__phone"
              className={`nav__link__phone    ${
                phoneNavState ? "nav__link--phone" : ""
              }  `}
              to="/Anxiety#meadow"
            >
              Mental-Health&darr;
              <div
                onClick={toggleTrueFalse}
                onMouseOut={() => setActive(false)}
                className={`  ${navActive ? "u-top__phone" : "nav__block "}`}
              >
                <NavLink
                  className={`nav__link    ${
                    phoneNavState ? "nav__link--phone" : ""
                  }  `}
                  to="/Anxiety#meadow"
                >
                  Anxiety
                </NavLink>
                <NavLink
                  className={`nav__link    ${
                    phoneNavState ? "nav__link--phone" : ""
                  }  `}
                  to="/bipolar#meadow"
                >
                  Bipolar
                </NavLink>
                <NavLink
                  className={`nav__link    ${
                    phoneNavState ? "nav__link--phone" : ""
                  }  `}
                  to="/ptsd#meadow"
                >
                  PTSD
                </NavLink>
                <NavLink
                  className={`nav__link    ${
                    phoneNavState ? "nav__link--phone" : ""
                  }  `}
                  to="/schizophrenia#meadow"
                >
                  Shizophrenia
                </NavLink>
                <NavLink
                  className={`nav__link    ${
                    phoneNavState ? "nav__link--phone" : ""
                  }  `}
                  to="/stress#meadow"
                >
                  Stress disorder
                </NavLink>
              </div>
            </NavLink>

            <NavLink
              className={`nav__link    ${
                phoneNavState ? "nav__link--phone" : ""
              }  `}
              to="/treatment#meadow"
            >
              Treatment
            </NavLink>

            <NavLink
              activeClassName="active__phone"
              className={`nav__link__phone    ${
                phoneNavState ? "nav__link--phone" : ""
              }  `}
              onMouseOver={() => setActive2(true)}
              to="/insurance#meadow"
            >
              Admission&darr;
              <div
                onMouseOut={() => setActive2(false)}
                className={`  ${navActive2 ? "u-top__phone" : "nav__block"}`}
              >
                <NavLink
                  className={`nav__link    ${
                    phoneNavState ? "nav__link--phone" : ""
                  }  `}
                  to="/insurance#meadow"
                >
                  Insurance eligibility
                </NavLink>
                <NavLink
                  className={`nav__link    ${
                    phoneNavState ? "nav__link--phone" : ""
                  }  `}
                  to="/faqs#meadow"
                >
                  FAQS
                </NavLink>
              </div>
            </NavLink>
            <NavLink
              className={`nav__link    ${
                phoneNavState ? "nav__link--phone" : ""
              }  `}
              to="/contact"
            >
              Contact
            </NavLink>
          </nav>
        </header>
        <Top />
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/home"
          render={(props) => (
            <Home {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/anxiety"
          render={(props) => (
            <Anxiety {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/bipolar"
          render={(props) => (
            <Bipolar {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/ptsd"
          render={(props) => (
            <Ptsd {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/schizophrenia"
          render={(props) => (
            <Schizophrenia {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/stress"
          render={(props) => (
            <Stress {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/treatment"
          render={(props) => (
            <Treatment {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/insurance"
          render={(props) => (
            <Insurance {...props} setboxModalState={setboxModalState} />
          )}
        />
        <Route
          exact
          path="/faqs"
          render={(props) => (
            <Faqs {...props} setboxModalState={setboxModalState} />
          )}
        />

        <Route
          exact
          path="/about"
          render={(props) => (
            <About {...props} setboxModalState={setboxModalState} />
          )}
        />

        <Route
          exact
          path="/contact"
          render={(props) => (
            <Form {...props} setboxModalState={setboxModalState} />
          )}
        />

<Route
          exact
          path="/register"
         component={Register}
        />


<Route
          exact
          path="/login"
         component={Login}
        />

        <footer className="footer">
          <img src={logo} alt="logo" className="footer__logo" />

          <p className="footer__paragraph">
            Royal Minds is a rehabilitation facility specializing in mental
            health and eating disorders. Located in 3719 E Baltimore St, Baltimore, MD 21224 only
            .
          </p>

          <a href="tel:4109201011" className="footer__number">(410)-920-1011</a>

          <h3 className="footer__copyright">
            Copyright 2019 Jeff Aviles | Privacy Policy
          </h3>
        </footer>
      </div>

      {/* +++++++++++++++++++BOx modal++++++++++++++++++++++++++++++++++++ */}

      <BoxModal
        setboxModalState={setboxModalState}
        boxModalState={boxModalState}
      />
    </div>
  );
}

export default App;
