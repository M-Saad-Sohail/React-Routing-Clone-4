import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("heyy");
  return (
    <nav>
      <div
        className={`navbar max-[970px]:bg-[#272a33] ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="navChild max-[970px]:hidden flex justify-between px-10 py-4 items-center">
          <img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/logo/logo.png" />
          <div className="flex  text-sm font-semibold items-center gap-x-6">
            <ul className="flex gap-10 text-white">
              <li><Link to="/">Homes</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="bg-[#fb3e3e] text-white max-[970px]:hidden py-4 px-8 btn-transition">
              BECAME A MEMBER
            </button>
          </div>
        </div>

        <div className="hidden max-[970px]:flex items-center py-5 px-10">
          <img
            className="w-28"
            src="https://preview.colorlib.com/theme/fitnessclub/assets/img/logo/logo.png"
          />
          <div className="absolute right-10">
            <i
              onClick={() => setMenuOpen(!menuOpen)}
              class="fa-solid fa-bars text-2xl"
            ></i>
          </div>
        </div>
      </div>
      <ul
        className={`text-white bg-[#272a33] w-full flex min-[970px]:hidden flex-col justify-center p-10 space-y-6 fixed transition-all ${
          menuOpen ? "top-15" : "-top-full"
        } z-10`}
      >
        <li><Link to="/">Homes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
