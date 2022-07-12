import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Axios from "axios";
import { URL_API, BASE_URL } from "../constants";
import Loading from "./loading";

const Layout = ({ children, meta }) => {
  return (
    <div>
      <Head>
        <title>{meta.title_web}</title>
        <meta name="description" content={meta.meta_description} />
        <meta name="robots" content="noodp,noydir" />
        <meta name="keywords" content={meta.meta_keyword} />
        <meta name="author" content="codekop" />
        <meta content="id" name="geo.country" />
        <link rel="canonical" href={meta.url_situs} />
        <meta property="og:locale" content="ID_id" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.banner} />
        <meta property="og:title" content={meta.title_web} />
        <meta property="og:description" content={meta.meta_description} />
        <meta property="og:url" content={meta.url_situs} />
        <meta property="og:site_name" content={meta.title_web} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={meta.meta_description} />
        <meta name="twitter:title" content={meta.title_web} />
        <meta name="twitter:image" content={meta.banner} />
        <link rel="icon" type="image/x-icon" href={meta.path_icon} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
          referrerpolicy="no-referrer"
        />
      </Head>
    </div>
  );
};
export default Layout;
