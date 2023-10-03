import { Button, Grid } from '@mui/material';
import classes from './services.module.scss';
import Image from 'next/image';
import { data } from './mock';

export const ServicesSection = () => {
  return (
    <section className={classes.servicesSection}>
      <h2 className={classes.title}>خدمات مبتنی بر هوش مصنوعی پراپیژن‌</h2>

      <Grid container className={classes.cardsContainer}>
        {data.map((service) => (
          <Grid key={service.id} item className={classes.servicesCard} xs={12} lg={5.8}>
            <Image src={service.image} alt={service.title} width={56} height={56} />
            <h5 className={classes.cardTitle}> {service.title}</h5>
            <p className={classes.cardCaption}>{service.caption} </p>
           
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
