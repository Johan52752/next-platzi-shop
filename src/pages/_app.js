import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";
import Header from "../components/header/Header";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S6HG4JGGSQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S6HG4JGGSQ');`}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
