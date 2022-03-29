import React, { useState, createContext } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { PromoterProvider } from "../services/contexts/UserContext";
import Layout from "../components/Layout";
import theme from "../styles/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider theme={theme}>
      <PromoterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PromoterProvider>
    </NativeBaseProvider>
  );
}

export default MyApp;
