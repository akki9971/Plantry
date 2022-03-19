// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/account.style.css'
import '../styles/header.css'
import '../styles/navbar.css'
import '../styles/style.one.css'
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import Head from 'next/head'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // import("bootstrap/dist/js/bootstrap");
  // }, []);

  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width" />
      <title>Buy Plants</title>
      <meta name="Plantry" content="Created for buying plants" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/Bootstrap/bootstrap.css" />
    </Head>
    <Script type="text/javascript" src="/Bootstrap/bootstrap.js" strategy="lazyOnload" />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
