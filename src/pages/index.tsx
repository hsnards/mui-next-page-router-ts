import * as React from 'react';
import { NextPageWithLayout } from '@/shared/types';
import MainLayout from '@/shared/components/layout/MainLayout';
import {
  FeaturesSection,
  InformationSection,
  AboutSection,
  ServicesSection,
  VisionSection,
  QuestionsAnswers
} from '@/components/home/components';
import Head from 'next/head';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>پراپیژن | ‌propision</title>
      </Head>
      <InformationSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <QuestionsAnswers />
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
