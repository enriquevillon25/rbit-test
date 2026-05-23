import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import { seoFaqs } from "data/siteContent";

const useStyles = makeStyles({ uniqId: "seo-service-content" })((theme) => ({
  root: {
    background: theme.palette.background.paper,
    paddingBottom: theme.spacing(8),
  },
  intro: {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
  },
  paragraph: {
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
  },
  faqGrid: {
    marginTop: theme.spacing(5),
  },
  faqItem: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
  },
  faqTitle: {
    marginBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function SeoServiceContent(): JSX.Element {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.intro}>
          <Typography component="h2" variant="h4" className={classes.title}>
            Reparación informática en Barcelona con diagnóstico claro
          </Typography>
          <Typography className={classes.paragraph}>
            En RBIT Informática ayudamos a particulares y empresas con
            reparación de ordenadores, portátiles, móviles, iPhone, MacBook,
            recuperación de datos y mantenimiento informático. Trabajamos desde
            Barcelona con atención cercana, presupuesto transparente y soluciones
            adaptadas a cada equipo.
          </Typography>
        </div>
        <Grid container spacing={4} className={classes.faqGrid}>
          {seoFaqs.map((faq) => (
            <Grid item md={6} xs={12} key={faq.question}>
              <article className={classes.faqItem}>
                <Typography
                  component="h3"
                  variant="h6"
                  className={classes.faqTitle}
                >
                  {faq.question}
                </Typography>
                <Typography className={classes.paragraph}>
                  {faq.answer}
                </Typography>
              </article>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default SeoServiceContent;
