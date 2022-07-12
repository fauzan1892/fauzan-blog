import Layout from "../../components/layout";
import ApiService from "../../service/api";
import Image from "next/image";
import Back from "../components/Back";
import Footer from "../components/Footer";

export const getServerSideProps = async ({ params }) => {
  const category = await ApiService.getKat();
  const meta = await ApiService.getMetaPage(params.slug);
  const article = await ApiService.getArticle(params.slug);
  const info = await ApiService.getInfo();
  return {
    props: {
      category,
      meta,
      info,
      article,
    },
  };
};

export default function Home({ category, meta, info, article }) {
  let articles = article.content ? article.content : [];
  let paginates = article.paginate ? article.paginate : [];
  return (
    <>
      <Layout meta={meta} />
      <Back />
      <div className="jumbotron text-dark" id="blog">
        <h2
          className="halo-text3 text-center"
          dangerouslySetInnerHTML={{ __html: articles.judul }}
        ></h2>
        <div className="container">
          <p className="text-center">
            <i className="fa fa-user-circle"></i> {articles.nm_member}
            <span className="btn-profile"> | </span>
            <i className="fa fa-calendar"></i> {paginates.tgl_insert}
            <span className="btn-profile"> | </span>
            <i className="fa fa-eye"></i> {articles.counter}{'x'}
          </p>
          <br />
          <center>
              <Image
                className="img-fluid"
                src={
                  articles.gambar == "0"
                    ? paginates.path_default
                    : paginates.path_img +
                      "" +
                      articles.u_login +
                      "/" +
                      articles.gambar
                }
                id="img-articles"
                alt={articles.judul}
                width="100%" height="50%" layout="responsive" objectFit="cover"
              />
          </center>
          <br />
          <div
            className="about-text"
            dangerouslySetInnerHTML={{ __html: articles.isi }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
