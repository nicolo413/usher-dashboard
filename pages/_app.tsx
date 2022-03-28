import React, {useState} from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { PromoterContext } from '../services/contexts/UserContext'
import Layout from "../components/Layout";
import { PromoterProfile } from "../utils/Types/userTypes";
function MyApp({ Component, pageProps }: AppProps) {

  // const mockProfile = {
  //   id: 1,
  //   email: 'codeworksBoss@gmail.com',
  //   name: 'Alessandro',
  //   venues: [],
  //   telephone: 983123456
  // }
  const [promoter, setPromoter] = useState<PromoterProfile | null>(null)


  return (
    <NativeBaseProvider>
      <PromoterContext.Provider value={{promoter, setPromoter}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PromoterContext.Provider>
    </NativeBaseProvider>
  );
}

export default MyApp;
