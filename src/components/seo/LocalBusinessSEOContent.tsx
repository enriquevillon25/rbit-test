import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import { businessInfo } from "seo/businessInfo";
import { primarySeoServices } from "seo/services";

const useStyles = makeStyles({ uniqId: "local_business_seo" })((theme) => ({
  root: {
    padding: theme.spacing(10, 0),
    background: theme.palette.background.paper,
  },
  intro: {
    maxWidth: 860,
    marginBottom: theme.spacing(5),
  },
  eyebrow: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
    textTransform: "uppercase",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
  paragraph: {
    fontSize: 17,
    lineHeight: "28px",
    color: theme.palette.text.secondary,
  },
  serviceBlock: {
    height: "100%",
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 8,
    background: theme.palette.background.default,
  },
  serviceTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
  },
  localCopy: {
    marginTop: theme.spacing(6),
  },
}));

function LocalBusinessSEOContent(): JSX.Element {
  const { classes } = useStyles();
  const visibleServices = primarySeoServices.slice(0, 6);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.intro}>
          <Typography component="p" className={classes.eyebrow}>
            Servicio técnico local en {businessInfo.address.addressLocality}
          </Typography>
          <Typography component="h2" variant="h4" className={classes.title}>
            Reparación de ordenadores en Barcelona
          </Typography>
          <Typography className={classes.paragraph}>
            En {businessInfo.shortName} ayudamos a particulares y empresas con
            reparación de ordenadores, reparación de portátiles, recuperación de
            datos, instalación de SSD y soporte informático en Barcelona, con
            atención cercana en la zona Eixample / Bailèn.
          </Typography>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5" className={classes.title}>
              Reparación de portátiles y MacBook
            </Typography>
            <Typography className={classes.paragraph}>
              Diagnosticamos portátiles que van lentos, no encienden, se
              calientan, tienen problemas de pantalla, batería, teclado,
              conectores o sistema operativo. También revisamos MacBook y
              equipos Apple con fallos de hardware o software.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5" className={classes.title}>
              Recuperación de datos y discos duros
            </Typography>
            <Typography className={classes.paragraph}>
              Revisamos discos duros, SSD, memorias USB y ordenadores dañados
              para valorar la recuperación de archivos importantes antes de
              realizar cualquier intervención técnica.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5" className={classes.title}>
              Instalación de SSD y mejora de rendimiento
            </Typography>
            <Typography className={classes.paragraph}>
              Si tu ordenador está lento, podemos instalar un SSD, clonar el
              sistema cuando sea posible, limpiar software innecesario y dejar
              el equipo preparado para trabajar con mayor fluidez.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h5" className={classes.title}>
              Servicio técnico informático en Eixample
            </Typography>
            <Typography className={classes.paragraph}>
              Estamos orientados a clientes de Barcelona que buscan un servicio
              técnico cercano, transparente y fácil de contactar en el entorno
              de Eixample, Bailèn y zonas próximas.
            </Typography>
          </Grid>
        </Grid>

        <div className={classes.localCopy}>
          <Typography component="h2" variant="h5" className={classes.title}>
            Tienda informática en Barcelona
          </Typography>
          <Grid container spacing={2}>
            {visibleServices.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <article className={classes.serviceBlock}>
                  <Typography
                    component="h3"
                    variant="h6"
                    className={classes.serviceTitle}
                  >
                    {service.title}
                  </Typography>
                  <Typography className={classes.paragraph}>
                    {service.description}
                  </Typography>
                </article>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default LocalBusinessSEOContent;
