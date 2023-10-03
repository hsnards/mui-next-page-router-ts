import { Box, Button, Container, List, ListItem, ListItemButton } from '@mui/material';
import { ComponentPropsWithoutRef } from 'react';
import { Header } from './header';
import { Footer } from './footer';
const MainLayout = ({ children }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box
        component={'main'}
        flexGrow={1}
        sx={{ backgroundColor: '#0B1226'}}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
