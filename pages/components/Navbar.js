/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ children, category }) => {
  useEffect(() => {
    const navbar = document.getElementById("navbarApp");
    // OnScroll event handler
    const onScroll = () => {
      // Get scroll value
      const scroll = document.documentElement.scrollTop;

      // If scroll value is more than 0 - add class
      if (scroll > 0) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
    };
    // Use the function
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <nav id="navbarApp" className="navbar navbar-expand-md fixed-top py-1">
        <div className="container">
          <a className="navbar-brand" href="/">
            {'./Fauzan'}
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item" key={0}>
                <Link href={`/`} aria-current="page">
                  <a className="nav-link">{'Home'}</a>
                </Link>
              </li>
              {category?.map((kat) => (
                <li className="nav-item" key={kat.id_kategori}>
                  <Link href={`/category/${kat.slug_kat}`} aria-current="page">
                    <a className="nav-link">{kat.nm_kategori}</a>
                  </Link>
                </li>
              ))}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
