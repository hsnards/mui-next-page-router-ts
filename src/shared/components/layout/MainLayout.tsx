import { Box, Button, Container, List, ListItem, ListItemButton } from '@mui/material';
import { ComponentPropsWithoutRef } from 'react';
import LogoSrc from '@/assets/images/Logo.png';
import Image from 'next/image';
import classes from './Header.module.scss';
const MainLayout = ({ children }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box component={'header'} bgcolor={'#0B1226'} borderBottom={'1.5px solid #121B32'}>
        <Container
          maxWidth={'xl'}
          sx={{ py: '35px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Image src={LogoSrc} alt="propision" />

          <ul className={classes.list}>
            <li>
              <ListItemButton color="white">سوالات متداول</ListItemButton>
            </li>
            <li>
              <ListItemButton>گزارشات و نمودار‌ها</ListItemButton>
            </li>
            <li>
              <ListItemButton>اشتراک ها</ListItemButton>
            </li>
            <li>
              <ListItemButton>بلاگ</ListItemButton>
            </li>
            <li>
              <ListItemButton>درباره ‌ما</ListItemButton>
            </li>
          </ul>
          <div className={classes['auth-container']}>
            <Button variant='text'>عضویت</Button>
            <Button variant="contained" color="secondary">
              ورود
            </Button>
          </div>
        </Container>
      </Box>
      <Box component={'main'} bgcolor={'#0B1226'} flexGrow={1}>
        {children}
      </Box>
      <Box component={'footer'} bgcolor={'#0B1226'} borderTop={'1.5px solid #121B32'} p={5}>
        Footer
      </Box>
    </Box>
  );
};

export default MainLayout;
