import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'React',
    href: '/react',
    Svg: '/img/react-logo.svg',
    description: (
      <>Get started with React and TypeScript using our templates for Vite.</>
    ),
  },
  {
    title: '.NET API',
    href: '/dotnet',
    Svg: '/img/dotnet-logo.svg',
    description: <>Start developing APIs using our templates for .NET.</>,
  },
  {
    title: 'FastAPI',
    href: '/fastapi',
    Svg: '/img/python-logo.svg',
    description: <>Create a FastAPI app with batteries included.</>,
  },
  {
    title: 'NestJS API',
    href: 'https://backstage.apps.aa.intility.com/create/templates/default/nest-api-template',
    Svg: '/img/nestjs.svg',
    description: (
      <>
        Start developing using TypeScript and build APIs using our template for
        NestJS.
      </>
    ),
  },
];

function Feature({ id, Svg = 'div', title, href, description }) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={href}>
        <div className="text--center">
          <img src={Svg} className={styles.featureSvg} alt={title} />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={href}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} id={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
