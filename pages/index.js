import Image from 'next/image'
import Layout from '../components/layout'
import ApiService from '../service/api'

export const getServerSideProps = async () => {
  const category = await ApiService.getKat();
  const meta = await ApiService.getMeta();
  const info = await ApiService.getInfo();
  return {
    props: { 
      category,
      meta,
      info
    },
  };
};

export default function Home({category, meta, info}) {
  return (
    <>
      <Layout category={category} meta={meta} />
      <main className="content">
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>{info.judul}</h1>
                <p>{info.deskripsi}</p>
              </div>
              <div className="col-md-6">
                <Image src="/static/images/banner.jpg" alt="banner" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
