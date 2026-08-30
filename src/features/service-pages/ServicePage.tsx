import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import JsonLd from "components/seo/JsonLd";
import MainContainer from "components/MainContainer";
import { businessInfo } from "seo/businessInfo";
import {
  getServicePageUrl,
  servicePages,
  type ServicePageData,
} from "seo/servicePages";
import { buildServicePageJsonLd } from "seo/structuredData";
import { handleWhatsApp } from "utils/sends";
import ServiceSeoHead from "./seo/ServiceSeoHead";

interface ServicePageProps {
  service: ServicePageData;
  onToggleDark: () => void;
  onToggleDir: () => void;
}

const useStyles = makeStyles({ uniqId: "service_page" })((theme) => ({
  main: {
    background: theme.palette.background.paper,
  },
  hero: {
    padding: theme.spacing(18, 0, 7),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(14, 0, 5),
    },
  },
  eyebrow: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    marginBottom: theme.spacing(1),
  },
  title: {
    maxWidth: 760,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: "54px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: 38,
      lineHeight: "44px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
      lineHeight: "38px",
    },
  },
  lead: {
    maxWidth: 680,
    color: theme.palette.text.secondary,
    fontSize: 19,
    lineHeight: "31px",
    marginBottom: theme.spacing(3),
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    alignItems: "center",
  },
  primaryButton: {
    minHeight: 46,
    borderRadius: 8,
    fontWeight: theme.typography.fontWeightBold,
  },
  address: {
    marginTop: theme.spacing(2.5),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  imagePanel: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 8,
    minHeight: 360,
    boxShadow: "0 18px 55px rgba(0, 0, 0, 0.14)",
    [theme.breakpoints.down("md")]: {
      minHeight: 300,
    },
  },
  heroImage: {
    width: "100%",
    height: "100%",
    minHeight: 360,
    objectFit: "cover",
    display: "block",
    [theme.breakpoints.down("md")]: {
      minHeight: 300,
    },
  },
  section: {
    padding: theme.spacing(6.5, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4.5, 0),
    },
  },
  mutedSection: {
    padding: theme.spacing(6.5, 0),
    background: theme.palette.grey[50],
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4.5, 0),
    },
  },
  sectionTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2.5),
  },
  text: {
    color: theme.palette.text.secondary,
    lineHeight: "28px",
  },
  card: {
    height: "100%",
    padding: theme.spacing(3),
    borderRadius: 8,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  },
  cardTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
  },
  list: {
    margin: 0,
    paddingLeft: theme.spacing(2.5),
    color: theme.palette.text.secondary,
    lineHeight: "30px",
  },
  faqItem: {
    padding: theme.spacing(3, 0),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  relatedGrid: {
    alignItems: "stretch",
  },
  relatedCard: {
    height: "100%",
    padding: theme.spacing(2.5),
    borderRadius: 8,
    border: `1px solid ${theme.palette.divider}`,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    textDecoration: "none",
    color: "inherit",
    transition: "border-color 180ms ease, transform 180ms ease",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      transform: "translateY(-2px)",
    },
  },
  finalCta: {
    maxWidth: 820,
    margin: "0 auto",
    textAlign: "center",
  },
}));

function ServicePage(props: ServicePageProps): JSX.Element {
  const { service, onToggleDark, onToggleDir } = props;
  const { classes } = useStyles();
  const relatedServices = servicePages
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const jsonLd = buildServicePageJsonLd(service);

  return (
    <>
      <ServiceSeoHead service={service} />
      <JsonLd data={jsonLd} />
      <MainContainer onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert>
        <main className={classes.main}>
          <section className={classes.hero}>
            <Container maxWidth="lg">
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography className={classes.eyebrow}>
                    {service.eyebrow}
                  </Typography>
                  <Typography component="h1" className={classes.title}>
                    {service.h1}
                  </Typography>
                  <Typography className={classes.lead}>{service.intro}</Typography>
                  <Box className={classes.ctaRow}>
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      className={classes.primaryButton}
                      onClick={() => {
                        handleWhatsApp({
                          ctaLocation: "home_final_cta",
                          language: "es",
                          label: `Solicitar diagnóstico - ${service.serviceName}`,
                        });
                      }}
                    >
                      Solicitar diagnóstico por WhatsApp
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      size="large"
                      href="#faq"
                      className={classes.primaryButton}
                    >
                      Ver preguntas frecuentes
                    </Button>
                  </Box>
                  <Typography className={classes.address}>
                    {businessInfo.address.streetAddress} · Eixample · Barcelona
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={classes.imagePanel}>
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className={classes.heroImage}
                      loading="eager"
                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </section>

          <section className={classes.mutedSection}>
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography component="h2" variant="h4" className={classes.sectionTitle}>
                    Qué incluye este servicio
                  </Typography>
                  <Paper className={classes.card}>
                    <ul className={classes.list}>
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography component="h2" variant="h4" className={classes.sectionTitle}>
                    Problemas habituales
                  </Typography>
                  <Paper className={classes.card}>
                    <ul className={classes.list}>
                      {service.problems.map((problem) => (
                        <li key={problem}>{problem}</li>
                      ))}
                    </ul>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </section>

          <section className={classes.section}>
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                {service.contentBlocks.map((block) => (
                  <Grid item xs={12} md={6} key={block.title}>
                    <Typography component="h2" variant="h4" className={classes.sectionTitle}>
                      {block.title}
                    </Typography>
                    <Typography className={classes.text}>{block.body}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </section>

          <section id="faq" className={classes.mutedSection}>
            <Container maxWidth="md">
              <Typography component="h2" variant="h4" className={classes.sectionTitle}>
                Preguntas frecuentes sobre {service.serviceName.toLowerCase()}
              </Typography>
              {service.faqs.map((faq) => (
                <div className={classes.faqItem} key={faq.question}>
                  <Typography component="h3" variant="h6" className={classes.cardTitle}>
                    {faq.question}
                  </Typography>
                  <Typography className={classes.text}>{faq.answer}</Typography>
                </div>
              ))}
            </Container>
          </section>

          <section className={classes.section}>
            <Container maxWidth="lg">
              <Typography component="h2" variant="h4" className={classes.sectionTitle}>
                Otros servicios informáticos en Barcelona
              </Typography>
              <Grid container spacing={3} className={classes.relatedGrid}>
                {relatedServices.map((related) => (
                  <Grid item xs={12} md={4} key={related.slug}>
                    <a
                      href={`/${related.slug}/`}
                      className={classes.relatedCard}
                      aria-label={`Ver ${related.serviceName}`}
                    >
                      <Typography component="h3" variant="h6" className={classes.cardTitle}>
                        {related.serviceName}
                      </Typography>
                      <Typography className={classes.text}>
                        {related.description}
                      </Typography>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </section>

          <section className={classes.mutedSection}>
            <Container maxWidth="md">
              <div className={classes.finalCta}>
                <Typography component="h2" variant="h4" className={classes.sectionTitle}>
                  ¿Necesitas ayuda con tu equipo?
                </Typography>
                <Typography className={classes.lead}>
                  Escríbenos por WhatsApp o visita RBIT Informática en Eixample.
                  Te orientamos con diagnóstico, viabilidad y presupuesto antes de reparar.
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.primaryButton}
                  onClick={() => {
                    handleWhatsApp({
                      ctaLocation: "home_final_cta",
                      language: "es",
                      label: `CTA final - ${service.serviceName}`,
                    });
                  }}
                >
                  Contactar por WhatsApp
                </Button>
              </div>
            </Container>
          </section>
        </main>
      </MainContainer>
    </>
  );
}

export default ServicePage;
