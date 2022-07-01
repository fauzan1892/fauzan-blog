import Layout from "../components/layout";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import ApiService from "../service/api";
import Link from "next/link";

export const getServerSideProps = async () => {
  const category = await ApiService.getKat();
  const meta = await ApiService.getMeta();
  const info = await ApiService.getInfo();
  const article = await ApiService.getPost();
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
  return (
    <>
      <div id="header">
        <Layout meta={meta} />
        <Navbar category={category} />
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="halo col-sm-7">
                <h2 className="halo-text mt-3" data-aos="fade-up">
                  Hi,
                </h2>
                <h2 className="halo-text2" data-aos="fade-up">
                  I'm Fauzan Falah,{" "}
                </h2>
                <h2 className="halo-text" data-aos="fade-up">
                  Full Stack Web Developer.
                </h2>
                <h3 className="halo-lead" data-aos="fade-up"></h3>
                <a
                  href="https://api.whatsapp.com/send?phone=6289618173609&text=Halo+Fauzan"
                  target="_blank"
                  className="btn btn-success btn-md mb-2 btn-profile"
                >
                  <i className="fab fa-whatsapp"></i> Hire Me
                </a>
                <a
                  href="https://github.com/fauzan1892"
                  className="btn btn-dark btn-md mb-2 btn-profile"
                  target="_blank"
                >
                  <i className="fab fa-github"></i> Github
                </a>
                <a
                  href="https://fauzandev.my.id/cd-view/assets/media/source/admin/33f8c6c062150e2ac82e9343fcd31528.pdf"
                  className="btn btn-danger btn-md mb-2 btn-profile"
                  target="_blank"
                >
                  <i className="far fa-file-pdf"></i> CV PDF
                </a>
              </div>
              <div className="col-sm-5">
                <center>
                  <img
                    src="https://fauzandev.my.id/cd-view/template/portfolio/img/user.png"
                    className="img-fluid"
                    id="img-user"
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="halo-text3">About Me</h2>
              <div className="perkenalan">
                <p className="perkenalan">
                  Hi, I'am Fauzan Falah, a Web Developer lives in Bekasi City
                  Indonesia, I focus on website and application development. My
                  hobby in IT is likes about new things about coding.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <h2 className="halo-text3">Work Experiences</h2>
              <h5>
                <Link
                  href={`/read/freelance-website-developer-2018-now-2.html`}
                  aria-current="page"
                >
                  <a className="text-white p-text">
                    <b>Freelance Website Developer</b>
                  </a>
                </Link>
              </h5>
              <Link
                href={`/read/freelance-website-developer-2018-now-2.html`}
                aria-current="page"
              >
                <a className="btn btn-success btn-sm">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="jumbotron" id="basic">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="halo-text3">Basic Information</h2>
              <div className="table-responsive">
                <table className="table table-bordered text-white w-100">
                  <tbody>
                    <tr>
                      <td>Name </td>
                      <td>Fauzan Falah</td>
                    </tr>
                    <tr>
                      <td>Date of Birth </td>
                      <td>Bekasi, 05 April 1999</td>
                    </tr>
                    <tr>
                      <td>E-mail </td>
                      <td>fauzancodekop@gmail.com</td>
                    </tr>
                    <tr>
                      <td>WhatsApp </td>
                      <td>6289618173609</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>
                        Ujung Harapan Kav. Daruttaqwa RT 005/014 No. 047 Kel.
                        Bahagia, Kec. Babelan, Kab. Bekasi Jawa Barat, Indonesia
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <br />
            </div>
            <div className="col-sm-6">
              <h2 className="halo-text3">My Skills</h2>
              <h4> Frontend Web</h4>
              <button className="btn btn-warning mt-3 btn-profile">
                HTML 5
              </button>
              <button className="btn btn-primary mt-3 btn-profile">
                CSS 3
              </button>
              <button className="btn btn-warning mt-3 btn-profile">
                JavaScript
              </button>
              <button className="btn btn-primary mt-3 btn-profile">
                Bootstrap
              </button>
              <button className="btn btn-warning mt-3 btn-profile">
                jQuery
              </button>
              <button className="btn btn-success mt-3 btn-profile">
                Vue Js
              </button>
              <button className="btn btn-info mt-3 btn-profile">
                Photoshop
              </button>
              <br />
              <br />
              <h4> Backend Web</h4>
              <button className="btn btn-primary mt-3 btn-profile">PHP</button>
              <button className="btn btn-danger mt-3 btn-profile">MySQL</button>
              <button className="btn btn-info mt-3 btn-profile">
                CodeIgniter
              </button>
              <button className="btn btn-danger mt-3 btn-profile">
                Laravel
              </button>
              <br />
              <br />
              <h4> Other Skills</h4>
              <button className="btn btn-info mt-3 btn-profile">CMS</button>
              <button className="btn btn-primary mt-3 btn-profile">SEO</button>
              <button className="btn btn-secondary mt-3 btn-profile">
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="jumbotron text-dark" id="portfolio">
        <h2 className="halo-text3 text-white text-center">Portfolio</h2>
        <div className="container">
          <Article article={article} />
        </div>
      </div>
      <div className="footer-second">
        <div className="container">
          <small>
            <b>Codekop CMS © 2017-2021 All Reserved</b>
          </small>
        </div>
      </div>
    </>
  );
}
