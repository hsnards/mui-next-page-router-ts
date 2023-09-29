import { Button, Container, ListItemButton } from '@mui/material';
import Image from 'next/image';
import LogoSrc from '@/assets/images/Logo.png';
import Menu from '@/assets/icons/Menu.svg';
import classes from './Header.module.scss';
const Header = () => {
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

        <Image className={classes.menu} src={Menu} alt={'menu icon'} />
      </div>
    </header>
  );
};

export default Header;
