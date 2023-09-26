import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../shared/components/Link';
import { NextPageWithLayout } from '@/shared/types';
import MainLayout from '@/shared/components/layout/MainLayout';

const Home: NextPageWithLayout = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Link href="/about">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
