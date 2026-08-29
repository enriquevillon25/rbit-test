import React from 'react';
import { Head } from 'next/document';
import theme from '../theme/palette';
import { neutralColors } from '../theme/tokens';

interface HeadComponentProps {
  children?: React.ReactNode;
}

const HeadComponent = ({ children }: HeadComponentProps) => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="msapplication-TileColor" content={neutralColors.white} />
    <meta name="theme-color" content={theme.smart.palette.primary.main} />
    <meta name="format-detection" content="telephone=yes, address=yes, email=yes" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css" rel="stylesheet" />
    {children}
  </Head>
);

HeadComponent.defaultProps = {
  children: null,
};

export default HeadComponent;
