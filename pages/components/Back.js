/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Back = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top py-2 active">
        <div className="container">
          <Link href={`/`} aria-current="page">
            <a className="btn text-white">
              <b>
                <i className="fas fa-angle-left"></i>
              </b>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Back;
