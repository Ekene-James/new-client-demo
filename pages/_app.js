import Layout from '../component/layout/Layout'
import '../styles/globals.css'
import AppStoreContextProvider from '../store/AppStore'
import React from 'react'

function MyApp({ Component, pageProps }) {
  
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return <AppStoreContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppStoreContextProvider>
}

export default MyApp
