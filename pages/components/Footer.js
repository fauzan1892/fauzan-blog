/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ children }) => {
  return (
    <div>
      <div className="clearfix"></div>
      <div className="footer-second">
        <div className="container">
          <small>
            <b>{'Codekop CMS © 2017-2022 All Reserved'}</b>
          </small>
        </div>
      </div>
    </div>
  );
};
export default Footer;
