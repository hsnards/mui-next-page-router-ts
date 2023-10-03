import classes from './calcLoading.module.scss';

export const CalculationLoading = () => {
  return (
    <div className={classes.loading__container}>
      <p className={classes.loading__text}>هوش مصنوعی پراپیژن درحال پیدا کردن است... لطفا کمی صبر کنید.</p>
    </div>
  );
};
