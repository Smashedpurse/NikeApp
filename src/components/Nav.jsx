import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import {navLinks} from "../constants/index"

import React from "react";

const Nav = () => {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item)=>(
              <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>              
              </li>              
            ))}
            <li className="font-palanquin shadow-lg ring-black rounded-lg p-3">
             <a href="#"> Sing in / Explore Now </a>
            </li>            
          </ul>
          <img src={hamburger} alt="hamburguerIcon" className="lg:hidden" width={25} height={25}/>
        </nav>
      </header>
    </>
  );
};

export default Nav;
