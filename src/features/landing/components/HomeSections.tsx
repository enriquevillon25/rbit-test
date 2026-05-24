import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import { handleWhatsApp } from "utils/sends";
import { useLocalizedContent } from "i18n/useLocalizedContent";

const useStyles = makeStyles({ uniqId: "home_sections" })((theme) => ({
  section: {
    padding: theme.spacing(6.25, 0),
    background: theme.palette.background.paper,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 0),
    },
  },
  mutedSection: {
    padding: theme.spacing(6.25, 0),
    background:
      theme.palette.mode === "light"
        ? theme.palette.grey[50]
        : theme.palette.background.default,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 0),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 0),
    },
  },
  intro: {
    maxWidth: 780,
    marginBottom: theme.spacing(3.5),
  },
  centerIntro: {
    maxWidth: 780,
    margin: "0 auto",
    textAlign: "center",
    marginBottom: theme.spacing(3.5),
  },
  eyebrow: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1.5),
  },
  text: {
    color: theme.palette.text.secondary,
    lineHeight: "28px",
  },
  card: {
    height: "100%",
    padding: theme.spacing(3.25),
    borderRadius: 8,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  },
  cardTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
  },
  problem: {
    padding: theme.spacing(2),
    borderRadius: 8,
    border: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.paper,
    fontWeight: theme.typography.fontWeightMedium,
  },
  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightBold,
  },
  localPanel: {
    padding: theme.spacing(3.5),
    borderRadius: 8,
    border: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.paper,
  },
  metaLine: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

export function MainServicesSection(): JSX.Element {
  const { classes } = useStyles();
  const content = useLocalizedContent();

  return (
    <div className={classes.section}>
      <Container maxWidth="lg">
        <div className={classes.intro}>
          <Typography className={classes.eyebrow}>
            {content.sections.servicesEyebrow}
          </Typography>
          <Typography component="h2" variant="h4" className={classes.title}>
            {content.sections.servicesTitle}
          </Typography>
          <Typography className={classes.text}>
            {content.sections.servicesText}
          </Typography>
        </div>
        <Grid container spacing={3}>
          {content.homeServices.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <Paper className={classes.card}>
                <Typography component="h3" variant="h6" className={classes.cardTitle}>
                  {service.title}
                </Typography>
                <Typography className={classes.text}>{service.description}</Typography>
                <Box mt={2}>
                  <Button href={service.href} color="primary" variant="outlined">
                    {content.sections.serviceButton}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export function ProblemSolutionsSection(): JSX.Element {
  const { classes } = useStyles();
  const content = useLocalizedContent();

  return (
    <div className={classes.mutedSection}>
      <Container maxWidth="lg">
        <div className={classes.centerIntro}>
          <Typography className={classes.eyebrow}>
            {content.sections.problemsEyebrow}
          </Typography>
          <Typography component="h2" variant="h4" className={classes.title}>
            {content.sections.problemsTitle}
          </Typography>
          <Typography className={classes.text}>
            {content.sections.problemsText}
          </Typography>
        </div>
        <Grid container spacing={2}>
          {content.solvedProblems.map((problem) => (
            <Grid item xs={12} sm={6} md={3} key={problem.title}>
              <Box className={classes.problem}>{problem.title}</Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export function TrustSection(): JSX.Element {
  const { classes } = useStyles();
  const content = useLocalizedContent();

  return (
    <div className={classes.section}>
      <Container maxWidth="lg">
        <div className={classes.centerIntro}>
          <Typography component="h2" variant="h4" className={classes.title}>
            {content.sections.trustTitle}
          </Typography>
        </div>
        <Grid container spacing={3}>
          {content.trustReasons.map((reason) => (
            <Grid item xs={12} sm={6} md={3} key={reason.title}>
              <Paper className={classes.card}>
                <Typography component="h3" variant="h6" className={classes.cardTitle}>
                  {reason.title}
                </Typography>
                <Typography className={classes.text}>{reason.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export function WorkProcessSection(): JSX.Element {
  const { classes } = useStyles();
  const content = useLocalizedContent();

  return (
    <div className={classes.mutedSection}>
      <Container maxWidth="lg">
        <div className={classes.centerIntro}>
          <Typography component="h2" variant="h4" className={classes.title}>
            {content.sections.processTitle}
          </Typography>
        </div>
        <Grid container spacing={3}>
          {content.workSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={step.title}>
              <Paper className={classes.card}>
                <Box className={classes.stepNumber}>{index + 1}</Box>
                <Typography component="h3" variant="h6" className={classes.cardTitle}>
                  {step.title}
                </Typography>
                <Typography className={classes.text}>{step.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export function LocalServiceSection(): JSX.Element {
  const { classes } = useStyles();
  const content = useLocalizedContent();
  const { localServiceInfo } = content;

  return (
    <div className={classes.section}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography className={classes.eyebrow}>
              {localServiceInfo.eyebrow}
            </Typography>
            <Typography component="h2" variant="h4" className={classes.title}>
              {localServiceInfo.title}
            </Typography>
            <Typography className={classes.text}>{localServiceInfo.description}</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper className={classes.localPanel}>
              <Typography component="h3" variant="h6" className={classes.cardTitle}>
                {localServiceInfo.contactTitle}
              </Typography>
              <Typography className={classes.metaLine}>
                {localServiceInfo.address}
              </Typography>
              <Typography className={classes.metaLine}>
                {localServiceInfo.scheduleLabel}: {localServiceInfo.schedule}
              </Typography>
              <Typography className={classes.metaLine}>
                {localServiceInfo.phoneLabel}: {localServiceInfo.phone}
              </Typography>
              <Box mt={3}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleWhatsApp}
                >
                  {localServiceInfo.cta}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
