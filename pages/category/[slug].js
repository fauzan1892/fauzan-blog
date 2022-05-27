import Head from 'next/head'
import Layout from '../../components/layout'
import ApiService from '../../service/api'
import { getAllPostIds } from '../../lib/helper'
import { useRouter } from 'next/router'

export const getServerSideProps = async ({params}) => {
  const category = await ApiService.getKat();
  const meta = await ApiService.getMetaKategori(params.slug);
  return {
    props: { 
      category,
      meta
    },
  };
};

export default function Post({category, meta}) {
  return (
    <Layout category={category} meta={meta}>
     
    </Layout>
  )
}