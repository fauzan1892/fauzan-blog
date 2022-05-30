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
      <main className="content mt-4">
        <div className="container">
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img src={info.base.path_img_meta+info.content.banner} 
                    alt="icon" className="image-profile" />
                </div>
                <div className="col-md-8 deskripsi">
                  <h2>
                    <b>
                      Hi,
                      <br/>
                      I'm Fauzan Falah,
                    </b>
                  </h2>
                  <h1><b> Full Stack Web Developer. </b></h1>
                  <div className="tombol mt-3">
                    <a href="https://api.whatsapp.com/send?phone=6289618173609&text=Halo+Fauzan" 
                      target="_blank" 
                      className="btn btn-success btn-md mb-2">
                        <i className="fab fa-whatsapp"></i> Hire Me</a>
                    <a href="https://github.com/fauzan1892" 
                      className="btn btn-dark ms-2 btn-md mb-2" 
                      target="_blank">
                    <i className="fab fa-github"></i> Github</a>
                    <a href="https://fauzandev.my.id/cd-view/assets/media/source/admin/33f8c6c062150e2ac82e9343fcd31528.pdf" 
                      className="btn btn-danger btn-md ms-2 mb-2" target="_blank">
                      <i className="fas fa-download"></i> CV PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
