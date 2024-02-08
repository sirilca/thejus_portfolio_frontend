import React, { useState } from "react";
import Logo from "../assets/Logo.png";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterSquare,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function NavbarSection({ executeScroll }) {

  const nav=useNavigate()


  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const gotoabout=()=>{
    nav('/about')
  }

  const gotocontact = () => {
    nav('/contact')
  }


  return (
    <nav className="bg-[#f5f6f0] p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" className="w-12 h-12" />
        </div>

        <div className="hidden md:flex space-x-10">
          <a
            href="/#Home"
            onClick={() => executeScroll("Home")}
            className="text-black font-outfit hover:text-gray-600"
          >
            Home
          </a>
          <a
            href="/#Meditation"
            onClick={() => executeScroll("Meditation")}
            className="text-black font-outfit hover:text-gray-600"
          >
            Meditations
          </a>
          <a
            href="/#Activities"
            onClick={() => executeScroll("Activities")}
            className="text-black font-outfit hover:text-gray-600"
          >
            Activities
          </a>
          <div onClick={gotoabout} className="cursor-pointer">
            <h1
              
              className="text-black font-outfit hover:text-gray-600"
            >
              About
            </h1>
          </div>
          
          {/* <a
            href="/#Contact"
            onClick={() => executeScroll("Contact")}
            className="text-black font-outfit hover:text-gray-600"
          >
            Contact
          </a> */} 
          <div onClick={gotocontact} className="cursor-pointer">
            <h1
              // href="/Contact"
              className="text-black font-outfit hover:text-gray-600"
            >
              Contact
            </h1>
          </div>
           
        </div>

        {/* <div className="hidden md:flex space-x-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook
              size={25}
              color="#565654"
              onMouseOver={({ target }) => (target.style.color = "#4a5568")}
              onMouseOut={({ target }) => (target.style.color = "#565654")}
            />
          </a>
          <a
            href="https://twitter.com/thejus_joseph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterSquare
              color="#565654"
              size={25}
              onMouseOver={({ target }) => (target.style.color = "#4a5568")}
              onMouseOut={({ target }) => (target.style.color = "#565654")}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thejusjoseph/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin
              color="#565654"
              size={25}
              onMouseOver={({ target }) => (target.style.color = "#4a5568")}
              onMouseOut={({ target }) => (target.style.color = "#565654")}
            />
          </a>
          <a
            href="https://www.instagram.com/thejus_joseph_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram
              color="#565654"
              size={25}
              onMouseOver={({ target }) => (target.style.color = "#4a5568")}
              onMouseOut={({ target }) => (target.style.color = "#565654")}
            />
          </a>
        </div> */}

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {!isMobileMenuOpen ? (
              <AiOutlineMenu color="black" />
            ) : (
              <AiOutlineClose color="black" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden m-5">
          <a
            href="/#Home"
            onClick={() => executeScroll("Home")}
            className="text-black font-outfit m-3 block hover:text-gray-600"
          >
            Home
          </a>
          <hr />
          <a
            href="#Meditation"
            onClick={() => executeScroll("Meditation")}
            className="text-black font-outfit m-3 block hover:text-gray-600"
          >
            Meditation
          </a>

          <hr />
          <a
            href="#Activities"
            onClick={() => executeScroll("Activities")}
            className="text-black font-outfit m-3 block hover:text-gray-600"
          >
            Activities
          </a>
          <hr />
          <div
            
            onClick={gotoabout}
            className="text-black font-outfit m-3 block hover:text-gray-600 cursor-pointer"
          >
            About
          </div>
          <hr />
          <div
           
            onClick={gotocontact}
            className="text-black font-outfit m-3 block hover:text-gray-600 cursor-pointer"
          >
            Contact
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarSection;
