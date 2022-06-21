import Head from "next/head";
import Layout from "../../components/layout";
import Article from "../components/Article";
import Footer from "../components/Footer";
import ApiService from "../../service/api";
import Back from "../components/Back";
import router from 'next/router'

export const getServerSideProps = async ({ params, query }) => {
  let url_kat = params.slug+"?page=" + query.page ?? 1;
  const category = await ApiService.getKat();
  const meta = await ApiService.getMetaKategori(params.slug);
  const article = await ApiService.getPostId(url_kat);
  const getpage = query.page ?? 0;
  return {
    props: {
      category,
      meta,
      article,
      getpage
    },
  };
};

export default function Post({ category, meta, article, getpage }) {
  return (
    <>
      <Layout meta={meta} />
      <Back />
      <div className="jumbotron text-dark" id="blog">
        <h2 className="halo-text3 text-center">
          <b>{meta.title_web}</b>
        </h2>
        <div className="container">
          <Article article={article} getpage={getpage} />
        </div>
      </div>
      <Footer />
    </>
  );
}
