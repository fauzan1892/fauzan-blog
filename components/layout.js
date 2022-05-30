import Head from 'next/head'
import React, { useEffect, useState } from "react"
import Image from 'next/image'
import Link from "next/link"
import Axios from "axios"
import { URL_API, BASE_URL } from "../constants"
import Loading from './loading'

const Layout = ({ children, category, meta }) => {
  return (
    <div>
      <Head>
        <title>{meta.title_web}</title>
        <meta name="description" content={meta.meta_description}/>
        <meta name="robots" content="noodp,noydir"/>
        <meta name="keywords" content={meta.meta_keyword}/>
        <meta name="author" content="codekop"/>
        <meta content="id" name="geo.country"/>

        <link rel="canonical" href={meta.url_situs}/>
        <meta property="og:locale" content="ID_id"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={meta.banner}/>
        <meta property="og:title" content={meta.title_web}/>
        <meta property="og:description" content={meta.meta_description}/>
        <meta property="og:url" content={meta.url_situs}/>
        <meta property="og:site_name" content={meta.title_web}/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content={meta.meta_description}/>
        <meta name="twitter:title" content={meta.title_web}/>
        <meta name="twitter:image" content={meta.banner}/>
        <link rel="icon" type="image/x-icon" href={meta.path_icon} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <nav className="navbar navbar-expand-md active">
        <div className="container">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
            <i className='fas fa-bars'></i>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item" key={0}>
                <Link href={`/`} aria-current="page">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              {category.map((kat) =>
                <li className="nav-item" key={kat.id_kategori}>
                  <Link href={`/category/${kat.slug_kat}`} aria-current="page">
                    <a className="nav-link">{kat.nm_kategori}</a>
                  </Link>
                </li>
              )}
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
  )
}
export default Layout;
