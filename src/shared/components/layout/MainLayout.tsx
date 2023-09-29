import { Box, Button, Container, List, ListItem, ListItemButton } from '@mui/material';
import { ComponentPropsWithoutRef } from 'react';
import back from '@/assets/images/background-small.svg';
import Header from './Header';
const MainLayout = ({ children }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box
        component={'main'}
        flexGrow={1}
        sx={{ backgroundColor: '#0B1226', backgroundImage: `url('/images/bg-pattern.png')` }}
      >
        {children}
      </Box>
      <Box component={'footer'} bgcolor={'#0B1226'} borderTop={'1.5px solid #121B32'} p={5}>
        Footer
      </Box>
    </Box>
  );
};

export default MainLayout;
