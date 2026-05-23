import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'lib/useTranslation';
import routeLink from 'data/text/link';
import Link from '../Link';
import useStyles from './error-style';

interface ErrorProps {
  errCode?: string;
  text?: string;
}

function Error(props: ErrorProps) {
  const { classes } = useStyles();
  const { errCode, text } = props;
  const { t } = useTranslation('common');

  return (
    <div className={classes.errorWrap}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={5} xs={12}>
            <div className={classes.flex}>
              <div className={classes.deco}>
                <Typography variant="h3">
                  {errCode}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h4">{text}</Typography>
              <Typography>
                {t('404_subtitle')}
              </Typography>
              <Button component={Link as any} variant="contained" color="primary" size="large" href={routeLink.education.home} className={classes.button}>
                {t('back')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;
