import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Router from "next/router"
import nProgress from "nprogress"
import "../styles/nprogress.css"

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <>
    <Component {...pageProps} />
  </>
}
export default MyApp
