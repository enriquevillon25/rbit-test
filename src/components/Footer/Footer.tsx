import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import useClientMediaQuery from "lib/useClientMediaQuery";
import { useLocalizedContent } from "i18n/useLocalizedContent";
import { businessInfo } from "seo/businessInfo";
import logo from "public/images/logo-rbit.jpg";
import useStyles from "./footer-style";

function Copyright({ label }: { label: string }) {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp; {label}
    </Typography>
  );
}

function Footer() {
  const { classes } = useStyles() as any;
  const content = useLocalizedContent();
  const theme = useTheme();
  const isDesktop = useClientMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useClientMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useClientMediaQuery(theme.breakpoints.down("md"));
  const footerSections = [
    {
      title: content.footer.sectionTitle,
      links: [
        {
          label: content.localServiceInfo.address,
          href: "https://www.google.com/maps/search/?api=1&query=Carrer%20de%20Bail%C3%A8n%20109%20Local%202%20Barcelona",
        },
        {
          label: content.localServiceInfo.schedule,
          href: "/contact",
        },
        {
          label: businessInfo.contact.telephone?.replace("+34", "") || "",
          href: `tel:${businessInfo.contact.telephone || ""}`,
        },
        {
          label: businessInfo.contact.email || "",
          href: `mailto:${businessInfo.contact.email || ""}`,
        },
      ],
    },
  ];

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box mr={-2}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              {/* <Typography variant="h6" color="textPrimary">
                {brand.education.projectName}
              </Typography> */}
            </div>
            <Typography
              color="textPrimary"
              className={classes.footerDesc}
              gutterBottom
            >
              {content.footer.description}
            </Typography>
            <Copyright label={content.footer.copyright} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={isTablet ? 0 : 4}
            justifyContent="space-evenly"
          >
            {footerSections.map((footer) => (
              <Grid
                item
                xs={12}
                md={8}
                key={footer.title}
                className={classes.siteMapItem}
              >
                {isDesktop && (
                  <div>
                    <Typography
                      variant="h6"
                      className={classes.title}
                      color="textPrimary"
                      gutterBottom
                    >
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.links.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            variant="subtitle1"
                            color="textSecondary"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isMobile && (
                  <Accordion
                    square
                    classes={{
                      root: classes.accordionRoot,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon className={classes.accordionIcon} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      classes={{
                        content: classes.accordionContent,
                      }}
                    >
                      <strong>{footer.title}</strong>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        {footer.links.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <IconButton aria-label="TW" className={classes.margin} size="small">
              <i className="ion-logo-facebook" />
            </IconButton>
            <IconButton aria-label="IG" className={classes.margin} size="small">
              <i className="ion-logo-instagram" />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
