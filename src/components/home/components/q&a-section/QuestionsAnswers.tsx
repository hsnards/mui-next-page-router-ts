import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, Typography } from '@mui/material';
import classes from './questionsAnswers.module.scss';
import { ArrowIcon } from '@/assets/icons/Arrow';
import { data } from './mock';

export const QuestionsAnswers = () => {
  return (
    <section className={classes.servicesSection}>
      <h2 className={classes.title}> سوالات متداول </h2>

      <div className={classes.containerAccordions}>
        {data.map((item) => (
          <Accordion
            defaultExpanded={item.id === 2}
            key={item.id}
            classes={{
              root: classes.accordionRoot,
              expanded: classes.accordionExpanded,
            }}
            disableGutters
          >
            <AccordionSummary
              classes={{
                expanded: classes.accordionExpanded,
              }}
              expandIcon={<ArrowIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className={classes.accordionTitle}>{item.title}</h3>
            </AccordionSummary>
            <Divider light variant="middle" />

            <AccordionDetails>
              <p className={classes.accordionDetails}>{item.details} </p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Button variant="contained" className={classes.showMore}>
        {' '}
        مشاهده همه سوالات
      </Button>
    </section>
  );
};
