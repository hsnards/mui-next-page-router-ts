import { CalculationLoading } from '@/shared/components/calculation-loading';
import MainLayout from '@/shared/components/layout/MainLayout';
import { NextPageWithLayout } from '@/shared/types';

const About: NextPageWithLayout = () => {
  return <CalculationLoading />;
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
