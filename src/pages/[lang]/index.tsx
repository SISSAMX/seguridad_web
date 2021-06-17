import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getLocalizationProps,
  LanguageProvider,
} from "@context/LanguageContext";
import Header from '@components/Components/Header/headerContainer';
import Footer from '@components/Components/Footer/FooterContainer';
import Dashboard from './dashboard';
import { Localization } from 'src/translations/types';

const App: NextPage<{localization: Localization}> = ({ localization }) => (
  <LanguageProvider localization={localization}>
            <Header/>
            <Dashboard/>
            <Footer/>
  </LanguageProvider>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "home");
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["en", "fr", "es"].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default App;