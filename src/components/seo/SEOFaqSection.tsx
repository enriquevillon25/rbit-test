import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "tss-react/mui";
import { useLocalizedContent } from "i18n/useLocalizedContent";

const useStyles = makeStyles({ uniqId: "seo_faq" })((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 4),
    background: theme.palette.background.paper,
  },
  titleWrap: {
    maxWidth: 820,
    margin: "0 auto",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: 17,
    lineHeight: "28px",
  },
  list: {
    maxWidth: 900,
    margin: "0 auto",
  },
  item: {
    boxShadow: "none",
    border: `1px solid ${theme.palette.divider}`,
    "&:before": {
      display: "none",
    },
  },
  question: {
    fontWeight: theme.typography.fontWeightBold,
  },
  answer: {
    color: theme.palette.text.secondary,
    lineHeight: "26px",
  },
}));

function SEOFaqSection(): JSX.Element {
  const { classes } = useStyles();
  const content = useLocalizedContent();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.titleWrap}>
          <Typography component="h2" variant="h4" className={classes.title}>
            {content.sections.faqTitle}
          </Typography>
          <Typography className={classes.subtitle}>
            {content.sections.faqSubtitle}
          </Typography>
        </div>
        <div className={classes.list}>
          {content.faqs.map((faq) => (
            <Accordion key={faq.question} className={classes.item}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography component="h3" className={classes.question}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SEOFaqSection;
