import React, { useEffect, useState } from "react"
import Image from 'next/image'
import Link from "next/link"

const Navbar = ({ children, article }) => {
  let articles = article.content;
  let paginates = article.paginate;
  return (
    <div>
      <div className="row">
        {articles.map((art) => 
        <div class="col-md-6 col-lg-3">
          <div class="card mb-4 card-rounded">   
            <a href="">
              <img class="card-img-top" 
                src={art.gambar == '0' ? 
                      paginates.path_default : 
                      paginates.path_img + '' + art.user + '/' + art.gambar  
                    } id="img-artikel" alt={art.judul}/>
            </a>
            <div class="card-body p-2">
              <small>
                <a href="" class="text-primary p-text">
                  <b>Portfolio</b>
                </a>
              </small>
              <p class="card-title mt-2">
                <a href="" class="text-card-home p-text">
                  <b>Codekop &amp; Pembaruan CMS Versi 4</b>
                </a>
              </p>
              <small class="text-danger">
                <b><i class="fa fa-calendar"></i>31 Januari 2022,  5:33</b>
              </small>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
export default Navbar;
