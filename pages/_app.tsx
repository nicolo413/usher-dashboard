import React, {useState, createContext} from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { PromoterProvider } from '../services/contexts/UserContext'
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }: AppProps) {


  return (
    <NativeBaseProvider>
      <PromoterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PromoterProvider>
    </NativeBaseProvider>
  );
}

export default MyApp;
