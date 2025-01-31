"use client";
import { useState } from "react";

const MobileHeader = ({ dark }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="orido_tm_mobile_menu w-full h-auto fixed top-0 left-0 hidden z-[10] middle:block">
      <div className="mobile_menu_inner w-full h-auto float-left clear-both bg-white py-[10px] px-[20px]">
        <div className="mobile_in w-full h-auto clear-both float-left flex items-center justify-between">
          <div className="logo">
            <a href="#">
              <img
                className="max-w-[90px] max-h-[70px]"
                src={`assets/img/logo/${dark ? "light" : "logo"}.png`}
                alt
              />
            </a>
          </div>
          <div
            className="trigger leading-[0]"
            onClick={() => setToggle(!toggle)}
          >
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown w-full h-auto clear-both float-left bg-white hidden"
        style={{ display: toggle ? "block" : "none" }}
      >
        <div className="dropdown_inner w-full h-auto clear-both float-left py-[25px] px-[20px]">
          <ul className="anchor_nav">
            <li className="current float-left w-full">
              <a
                className="text-black inline-block p-0 font-medium"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-medium"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-medium"
                href="#service"
              >
                Service
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-medium"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-medium"
                href="#blog"
              >
                Blog
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-medium"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;
