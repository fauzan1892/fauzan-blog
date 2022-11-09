import Layout from "../components/layout";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import Image from "next/image";
import ApiService from "../service/api";
import Link from "next/link";
import bg from "../public/background.png";

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
                {'Hi,'}
                </h2>
                <h2 className="halo-text2" data-aos="fade-up">
                 {"I'm Fauzan Falah,"}
                </h2>
                <h2 className="halo-text" data-aos="fade-up">
                  {' Full Stack Web Developer.'}
                </h2>
                <h3 className="halo-lead" data-aos="fade-up"></h3>
                <a
                  href="https://api.whatsapp.com/send?phone=6289618173609&text=Halo+Fauzan"
                  target="_blank" rel="noreferrer" 
                  className="btn btn-success btn-md mb-2 btn-profile"
                >
                  <i className="fab fa-whatsapp"></i> {'Hire Me'}
                </a>
                <a
                  href="https://github.com/fauzan1892"
                  className="btn btn-dark btn-md mb-2 btn-profile"
                  target="_blank" rel="noreferrer" 
                >
                  <i className="fab fa-github"></i> {'Github'}
                </a>
                <a
                  href="https://fauzandev.my.id/cd-view/assets/media/source/admin/33f8c6c062150e2ac82e9343fcd31528.pdf"
                  className="btn btn-danger btn-md mb-2 btn-profile"
                  target="_blank" rel="noreferrer" 
                >
                  <i className="far fa-file-pdf"></i> {'CV PDF'}
                </a>
              </div>
              <div className="col-sm-5">
                <center>
                  <br/><br/>
                  {/* <div style={{width: '100%', height: '100%', position: 'relative'}}> */}
                    <Image
                      src="https://fauzandev.my.id/cd-view/template/portfolio/img/user.png"
                      className="img-fluid"
                      id="img-user"
                      alt='fauzan-jpg'
                      width="100%" height="100%" layout="responsive" objectFit="cover"
                    />
                  {/* </div> */}
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
              <h2 className="halo-text3">{"About Me"}</h2>
              <div className="perkenalan">
                <p className="perkenalan">
                {"Hi, I'am Fauzan Falah, a Web Developer lives in Bekasi City"}
                {"Indonesia, I focus on website and application development. My"}
                {"hobby in IT is likes about new things about coding."}
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <h2 className="halo-text3">{"Work Experiences"}</h2>
              <h5>
                <Link
                  href={`/read/freelance-website-developer-2018-now-2.html`}
                  aria-current="page"
                >
                  <a className="text-white p-text">
                    <b>{"Freelance Website Developer"}</b>
                  </a>
                </Link>
              </h5>
              <Link
                href={`/read/freelance-website-developer-2018-now-2.html`}
                aria-current="page"
              >
                <a className="btn btn-success btn-sm">{"Read More"}</a>
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
              <h2 className="halo-text3">{"Basic Information"}</h2>
              <div className="table-responsive">
                <table className="table table-bordered text-white w-100">
                  <tbody>
                    <tr>
                      <td>{"Name "}</td>
                      <td>{"Fauzan Falah"}</td>
                    </tr>
                    <tr>
                      <td>{"Date of Birth "}</td>
                      <td>{"Bekasi, 05 April 1999"}</td>
                    </tr>
                    <tr>
                      <td>{"E-mail "}</td>
                      <td>{"fauzancodekop@gmail.com"}</td>
                    </tr>
                    <tr>
                      <td>{"WhatsApp"} </td>
                      <td>{"6289618173609"}</td>
                    </tr>
                    <tr>
                      <td>{"Address"}</td>
                      <td>
                        {"Ujung Harapan Kav. Daruttaqwa RT 005/014 No. 047 Kel."}
                        {"Bahagia, Kec. Babelan, Kab. Bekasi Jawa Barat, Indonesia"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <br />
            </div>
            <div className="col-sm-6">
              <h2 className="halo-text3">{"My Skills"}</h2>
              <h4> {"Frontend Web"}</h4>
              <button className="btn btn-warning mt-3 btn-profile">
                {"HTML 5"}
              </button>
              <button className="btn btn-primary mt-3 btn-profile">
               {" CSS 3"}
              </button>
              <button className="btn btn-warning mt-3 btn-profile">
                {"JavaScript"}
              </button>
              <button className="btn btn-primary mt-3 btn-profile">
                {"Bootstrap"}
              </button>
              <button className="btn btn-warning mt-3 btn-profile">
                {"jQuery"}
              </button>
              <button className="btn btn-success mt-3 btn-profile">
                {"Vue Js"}
              </button>
              <button className="btn btn-info mt-3 btn-profile">
                {"Photoshop"}
              </button>
              <br />
              <br />
              <h4> {"Backend Web"}</h4>
              <button className="btn btn-primary mt-3 btn-profile">{"PHP"}</button>
              <button className="btn btn-danger mt-3 btn-profile">{"MySQL"}</button>
              <button className="btn btn-info mt-3 btn-profile">
              {"CodeIgniter"}
              </button>
              <button className="btn btn-danger mt-3 btn-profile">
              {"Laravel"}
              </button>
              <br />
              <br />
              <h4> {"ther Skills"}</h4>
              <button className="btn btn-info mt-3 btn-profile">{"CMS"}</button>
              <button className="btn btn-primary mt-3 btn-profile">{"SEO"}</button>
              <button className="btn btn-secondary mt-3 btn-profile">
              {"Github"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="jumbotron text-dark" id="portfolio">
        <h2 className="halo-text3 text-white text-center">{"Portfolio"}</h2>
        <div className="container">
          <Article article={article} />
        </div>
      </div>
      {/* <div className="footer text-white mb-4" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-left">
              <br />
              <h2 className="halo-text3">Google Maps</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6324972520476!2d107.01620782915519!3d-6.193579666442703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnMzYuOSJTIDEwN8KwMDEnMDAuMyJF!5e0!3m2!1sid!2sid!4v1507127219046"
                className="img-responsive gmaps"
              ></iframe>
            </div>
            <div className="col-md-6" data-aos="fade-right">
              <br />
              <h2 className="halo-text3">Feel free to contact me</h2>
              <form method="post" action="https://fauzandev.my.id/kontak/add">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" name="email" />
                </div>
                <div className="form-group">
                  <label>Your Messages</label>
                  <textarea name="text" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <br />
        </div>
      </div> */}
      <div className="footer-second">
        <div className="container">
          <small>
            <b>{"Codekop CMS © 2017-2021 All Reserved"}</b>
          </small>
        </div>
      </div>
    </>
  );
}
