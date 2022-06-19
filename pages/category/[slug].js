import Head from "next/head";
import Layout from "../../components/layout";
import Article from "../components/Article";
import ApiService from "../../service/api";
import Back from "../components/Back";

export const getServerSideProps = async ({ params }) => {
  const category = await ApiService.getKat();
  const meta = await ApiService.getMetaKategori(params.slug);
  const article = await ApiService.getPostId(params.slug);
  return {
    props: {
      category,
      meta,
      article,
    },
  };
};

export default function Post({ category, meta, article }) {
  return (
    <>
      <Layout meta={meta} />
      <Back />
      <div className="jumbotron text-dark" id="blog">
        <h2 className="halo-text3 text-center">
          <b>{meta.title_web}</b>
        </h2>
        <div className="container">
          <Article article={article} />
        </div>
      </div>
    </>
  );
}
