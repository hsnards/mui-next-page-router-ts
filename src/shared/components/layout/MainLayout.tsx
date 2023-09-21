import { Box } from '@mui/material';
import { ComponentPropsWithoutRef } from 'react';

const MainLayout = ({ children }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box component={'header'} p={5}>
        Header
      </Box>
      <Box component={'main'} flexGrow={1}>
        {children}
      </Box>
      <Box component={'footer'} p={5}>
        Footer
      </Box>
    </Box>
  );
};

export default MainLayout;
