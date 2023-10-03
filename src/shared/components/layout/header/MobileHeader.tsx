import { Drawer, Button, ListItemButton } from '@mui/material';
import Image from 'next/image';
import LogoSrc from '@/assets/images/Logo.png';
import { CloseRounded } from '@mui/icons-material';
import { Dispatch, SetStateAction } from 'react';
import classes from './mobileHeader.module.scss';

export const MobileHeader = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<null | HTMLElement>>;
}) => {
  const { open, setOpen, setLoading } = props;

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: '100%',
          backgroundColor: '#0B1226',
        },
      }}
      open={open}
      ref={setLoading}
    >
      <div className={classes.header}>
        <Image className={classes.logo} src={LogoSrc} alt="propision" />

        <CloseRounded htmlColor="white" className={classes.close__menu} onClick={() => setOpen(false)} />
      </div>

      <div className={classes.container}>
        <ul className={classes.list}>
          <li>
            <ListItemButton color="white">سوالات متداول</ListItemButton>
          </li>
          <li>
            <ListItemButton>درباره ‌ما</ListItemButton>
          </li>
          <li>
            <ListItemButton>بلاگ</ListItemButton>
          </li>
          <li>
            <ListItemButton>اشتراک ها</ListItemButton>
          </li>
          <li>
            <ListItemButton>گزارشات و نمودار‌ها</ListItemButton>
          </li>
        </ul>
        <div>
          <Button variant="contained" color="secondary" fullWidth>
            ورود
          </Button>
          <Button style={{ marginTop: 8 }} variant="text" fullWidth>
            عضویت
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
