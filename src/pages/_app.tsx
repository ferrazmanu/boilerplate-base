import { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "src/styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with Styled Components"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* a simple JSON file in your website that tells the browser about your
        website on user's mobile device or desktop. Having a manifest is required by 
        Chrome to show the Add to Home Screen prompt */}
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
