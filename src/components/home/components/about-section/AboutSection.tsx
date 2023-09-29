import { Button } from '@mui/material';

import classes from './about.module.scss';
import Image from 'next/image';
export const AboutSection = () => {
  return (
    <section className={classes.aboutSection}>
      <div className={classes.container}>
        <h2 className={classes.title}>
          درباره
          <strong> پراپیژن </strong>
          <Image className={classes.motionSvg} width={40} height={40} src={'/images/motion.svg'} alt="درباره پراپیژن" />
        </h2>
        <p className={classes.caption}>
          پراپیژن با سرمایه‌گذاری شرکت پیوند مدیریت سرمایه ایوان، با استفاده از تکنولوژی هوش مصنوعی و با شعار
          <strong>«تخمین ارزش ملک با ما؛ تصمیم با شما»</strong>
          به تازگی فعالیت خود را آغاز کرده است.
        </p>
        <p className={classes.caption}>
          هدف از راه‌اندازی این بستر، ارزش‌گذاری دقیق املاک مبتنی بر داده‌های واقعی بازار به منظور تصمیم‌گیری و انتخاب
          درست، افزایش شفافیت و آگاه‌سازی فعالان بازار مسکن است.
        </p>
        <Button className={classes.moreButton} variant="contained" color="inherit">
          بیشتر بدانید
        </Button>
      </div>
    </section>
  );
};
