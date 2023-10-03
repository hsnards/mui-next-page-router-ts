import classes from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <section className={classes.informationBox}>
          <div>
            <p className={classes.label}>شماره تماس :</p>
            <p className={classes.text}>0912 339 4758</p>
          </div>
          <div>
            <p className={classes.label}>آدرس شرکت :</p>
            <p className={classes.text}>تهران، طرشت، بلوار صالحی، پلاک 25، واحد 3</p>
          </div>
        </section>

        <section className={classes.certificatesBox}>
          <div className={classes.certificate}>مجوز</div>
          <div className={classes.certificate}>مجوز</div>
        </section>

      </div>
      <div className={classes.container}>
        <div className={classes.socialMediaBox}>ergrer</div>

        <p className={classes.siteName}>© 140۲ وبسایت پراپیژن</p>
      </div>
    </footer>
  );
};
