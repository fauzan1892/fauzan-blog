/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
const Article = ({ children, article }) => {
  let articles = article.content;
  let paginates = article.paginate;
  useEffect(() => {
    window.addEventListener("DOMSubtreeModified", function () {
      var elem = document.querySelector(".row");
      if (elem) {
        var msnry = new Masonry(elem, {
          // options
          itemSelector: ".grid-item",
          columnWidth: 160,
          gutter: 20,
        });
      }
    });
  }, []);
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {articles.map((art) => (
          <div key={art.slug_berita}>
            <div className="card mb-4 card-rounded">
              <Link href={`/read/${art.slug_berita}.html`}>
                <a>
                  <img
                    className="card-img-top"
                    src={
                      art.gambar == "0"
                        ? paginates.path_default
                        : paginates.path_img + "" + art.user + "/" + art.gambar
                    }
                    id="img-artikel"
                    alt={art.judul}
                  />
                </a>
              </Link>
              <div className="card-body">
                <small>
                  <Link href={`/category/${art.slug_kat}`} aria-current="page">
                    <a className="text-primary p-text">
                      <b>{art.nm_kategori}</b>
                    </a>
                  </Link>
                </small>
                <p className="card-title mt-2">
                  <Link href={`/read/${art.slug_berita}.html`}>
                    <a
                      className="text-card-home p-text"
                      dangerouslySetInnerHTML={{ __html: art.judul }}
                    ></a>
                  </Link>
                </p>
                <small className="text-danger">
                  <b>
                    <i className="fa fa-calendar pr-2"></i> {art.tgl_input}
                  </b>
                </small>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};
export default Article;
