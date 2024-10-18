import React from "react";

const HamburgerBtn = ({ setIsOpen, isOpen }) => {
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
        console.log(isOpen);
      }}
      className={`lg:hidden flex items-center ${isOpen ? "open" : ""}`}
    >
      <button className="text-black hamburger-btn">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="line line1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16"
          ></path>
          <path
            className="line line2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 12h16"
          ></path>
          <path
            className="line line3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default HamburgerBtn;
