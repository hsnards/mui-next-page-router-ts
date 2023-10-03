import { Button, CircularProgress, ListItemButton } from '@mui/material';
import Image from 'next/image';
import LogoSrc from '@/assets/images/Logo.png';
import Menu from '@/assets/icons/Menu.svg';
import classes from './Header.module.scss';
import { useState } from 'react';

import dynamic from 'next/dynamic';
const MobileHeader = dynamic(() => import('./mobile').then((module) => module.MobileHeader), {
  ssr: false,
});

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<null | HTMLElement>(null);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Image className={classes.logo} src={LogoSrc} alt="propision" />
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
        <div className={classes.authContainer}>
          <Button variant="text">عضویت</Button>
          <Button variant="contained" color="secondary">
            ورود
          </Button>
        </div>
        {open && !loading ? (
          <CircularProgress className={classes.menu} size={24} />
        ) : (
          <Image className={classes.menu} src={Menu} alt={'menu icon'} onClick={() => setOpen(true)} />
        )}
      </div>
      {open && <MobileHeader open setOpen={setOpen} setLoading={setLoading} />}
    </header>
  );
};
