import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import ServicePage from "features/service-pages/ServicePage";
import {
  getServicePageBySlug,
  servicePageSlugs,
  type ServicePageData,
} from "seo/servicePages";

interface ServicePageRouteParams extends ParsedUrlQuery {
  serviceSlug: string;
}

interface ServicePageRouteProps {
  service: ServicePageData;
  onToggleDark: () => void;
  onToggleDir: () => void;
}

function ServicePageRoute(props: ServicePageRouteProps): JSX.Element {
  return <ServicePage {...props} />;
}

export default ServicePageRoute;

export const getStaticPaths: GetStaticPaths<ServicePageRouteParams> = async () => ({
  paths: servicePageSlugs.map((serviceSlug) => ({
    params: { serviceSlug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  { service: ServicePageData },
  ServicePageRouteParams
> = async ({ params }) => {
  const service = params?.serviceSlug
    ? getServicePageBySlug(params.serviceSlug)
    : undefined;

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
  };
};
