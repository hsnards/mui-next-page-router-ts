import { Button } from '@mui/material';
import classes from './newsArticles.module.scss';
import { data } from './mock';
import Image from 'next/image';

export const NewsArticlesSection = () => {
  return (
    <section className={classes.articles__section}>
      <h2 className={classes.section__title}>اخبار و مقالات</h2>

      <div className={classes.cards__container}>
        {data.map((article) => (
          <article key={article.id} className={classes.article__card}>
            <div className={classes.image__container}>
              <Image fill className={classes.card__image} src={article.image} alt={article.title} />
            </div>
            <div>
              <h3 className={classes.card__title}>{article.title}</h3>
              <p className={classes.card__caption}>{article.date}</p>
            </div>

            <Button variant="outlined" color={'secondary'} fullWidth size="small">
              خواندن مقاله
            </Button>
          </article>
        ))}
      </div>

      <Button variant="contained" color={'secondary'}>
        مشاهده همه مطالب
      </Button>
    </section>
  );
};
