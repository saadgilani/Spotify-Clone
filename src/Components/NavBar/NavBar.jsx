import React from "react";
import { Outlet } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons";
import {faArrowRight, faArrowDown,faPerson}  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
    <div className="navBar">
      <div className="navBarLeftButtons">
        <a className="navBarButton" href=""><FontAwesomeIcon icon={faArrowLeft}/></a>
        <a className="navBarButton" href=""><FontAwesomeIcon icon={faArrowRight}/></a>
      </div>

      <div className="navBarRightButtons">
        {/* <a className=" profileBtn" href=""><FontAwesomeIcon icon={faPerson}/>Profile <FontAwesomeIcon icon={faArrowDown}/></a> */}
        <Link className="navBarRightBtns" to="/login"><span>Login</span> </Link>
        <Link className="navBarRightBtns" to="/signup"><span>SignUp</span></Link>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
