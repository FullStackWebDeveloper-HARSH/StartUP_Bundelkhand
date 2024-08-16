import React from "react";
import { IoMenu } from "react-icons/io5";
import { SlMagnifier } from "react-icons/sl";
import Logo from '../src/assets/img/startupLogo.png'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="section-1">
        <div className="menu">
          <IoMenu />
        </div>
        <img src={Logo} alt="" />
        <button>startupbundelkhand.com</button>
      </div>
      <div className="section-2">
        {["EDUCTION", "COMMUNITY", "LIBRARY", "PRODUCTS"].map((item, index)=>(
            <a key={index} href="">{item}</a>
        ))}
      </div>
      <div className="section-3">
        <a href="">ABOUT</a>
        <div className="search-icon">
        <SlMagnifier />
        </div>
        {["Sign In", "Sign Up"].map((item, index)=>(
            <a href="#" key={index} className="sign-btn">{item}</a>
        ))}

      </div>
    </div>
  );
};

export default Navbar;
