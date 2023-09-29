import { Button, Grid } from '@mui/material';
import classes from './services.module.scss';
import Image from 'next/image';
import svg from '@/assets/icons/service-valuable.svg';

export const ServicesSection = () => {
  return (
    <section className={classes.servicesSection}>
      <h2 className={classes.title}>خدمات مبتنی بر هوش مصنوعی پراپیژن‌</h2>

      <Grid container className={classes.cardsContainer}>
        <Grid item className={classes.servicesCard} xs={12} lg={5.8}>
          <Image src={svg} alt="کجا بخرم؟" width={56} height={56} />
          <h5 className={classes.cardTitle}> ارزش‌گذاری</h5>
          <p className={classes.cardCaption}>ارزش‌گذاری املاک تهران مبتنی بر داده‌های واقعی بازار</p>
        </Grid>
        <Grid item className={classes.servicesCard} xs={12} lg={5.8}>
          <Image src={svg} alt="کجا بخرم؟" width={56} height={56} />
          <h5 className={classes.cardTitle}> ارزش‌گذاری</h5>
          <p className={classes.cardCaption}>ارزش‌گذاری املاک تهران مبتنی بر داده‌های واقعی بازار</p>
        </Grid>
        <Grid item className={classes.servicesCard} xs={12} lg={5.8}>
          <Image src={svg} alt="کجا بخرم؟" width={56} height={56} />
          <h5 className={classes.cardTitle}> ارزش‌گذاری</h5>
          <p className={classes.cardCaption}>ارزش‌گذاری املاک تهران مبتنی بر داده‌های واقعی بازار</p>
        </Grid>
        <Grid item className={classes.servicesCard} xs={12} lg={5.8}>
          <Image src={svg} alt="کجا بخرم؟" width={56} height={56} />
          <h5 className={classes.cardTitle}> ارزش‌گذاری</h5>
          <p className={classes.cardCaption}>ارزش‌گذاری املاک تهران مبتنی بر داده‌های واقعی بازار</p>
        </Grid>
      </Grid>
    </section>
  );
};
