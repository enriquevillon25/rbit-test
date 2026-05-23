import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface LinkComponentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
  locale?: string;
  skipLocaleHandling?: boolean;
  to?: string;
}

const LinkComponent = React.forwardRef<HTMLAnchorElement, LinkComponentProps>((props, ref) => {
  const {
    children,
    href: hrefProp,
    skipLocaleHandling: initialSkipLocaleHandling,
    to,
    ...rest
  } = props;
  const router = useRouter()
  const locale = String(rest.locale || router.query.locale || '')

  let skipLocaleHandling = initialSkipLocaleHandling;
  let href = String(to || hrefProp || router.asPath)
  if (href.indexOf('http') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale)
  }

  return (
    <NextLink href={href} legacyBehavior passHref>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </NextLink>
  )
});

export default LinkComponent
