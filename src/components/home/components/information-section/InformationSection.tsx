import { Button, Grid } from '@mui/material';
import classes from './information.module.scss';
import Image from 'next/image';
import svg from '@/assets/images/try-for-it.svg';

export const InformationSection = () => {
  return (
    <section className={classes.informationSection}>
      <h2 className={classes.title}>
        پراپیژن؛
        <br />
        تخمین ارزش <span className={classes.titleYellow}>ملک</span> با ما؛{' '}
        <span className={classes.titleBlue}>تصمیم</span> با شما
      </h2>

      <h4 className={classes.moreInformationText}>
        شما می‌توانید بر اساس معیارهای اصلی و شرایط ملک، متوسط ارزش ملک خود را مبتنی بر داده‌های واقعی بازار در مناطق
        مختلف تهران (محله و بلوک شهری) تعیین کنید.
      </h4>
      <div className={classes.imageContainer}>
        <Image className={classes.tryForIt} src={svg} alt="try for it" width={94} height={112} />
      </div>
    </section>
  );
};
