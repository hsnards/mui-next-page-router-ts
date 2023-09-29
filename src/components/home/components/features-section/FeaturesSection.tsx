import { Button, Grid } from '@mui/material';
import classes from './features.module.scss';
import Image from 'next/image';
import svg from '@/assets/images/try-for-it.svg';

export const FeaturesSection = () => {
  return (
    <Grid container component={'section'} className={classes.featuresSection} gap={3}>
      <Grid xs={12} lg={5.8}>
        <div className={classes.featureCard}>
          <Image src={svg} alt="کجا بخرم؟" width={144} height={96} />

          <h5 className={classes.cardTitle}>کجا بخرم؟</h5>
          <p className={classes.cardCaption}>
            از طریق این ابزار شما می‌توانید متناسب با بودجه و معیارهای اصلی و شرایط مطلوب خودتان، بهترین مکان جهت خرید
            ملک در مناطق مختلف تهران (محله و بلوک) پیدا کنید.
          </p>
          <Button variant="contained" color="secondary">
            اکنون امتحان کن
          </Button>
        </div>
      </Grid>
      <Grid xs={12} lg={5.8}>
        <div className={classes.featureCard}>
          <Image src={svg} alt="  چند بخرم/ چند بفروشم؟" width={144} height={96} />

          <h5 className={classes.cardTitle}>چند بخرم/ چند بفروشم؟</h5>
          <p className={classes.cardCaption}>
            از طریق این پنل شما می‌توانید بر اساس معیارهای اصلی و شرایط ملک، متوسط ارزش ملک خود را مبتنی بر داده‌های
            واقعی در مناطق مختلف تهران (محله و بلوک) تعیین کنید.
          </p>
          <Button variant="contained" color="secondary">
            اکنون امتحان کن
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
