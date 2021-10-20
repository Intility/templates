import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Create React App',
    href: '/cra',
    Svg: '/img/react-logo.svg',
    description: (
      <>
        Get started with React using our templates for Create React App.
        TypeScript and JavaScript available.
      </>
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
    description: (
      <>
        Create a FastAPI app with batteries included.
      </>
    ),
  },
  {
    title: 'TypeScript & Express.js',
    href: '/express',
    Svg: '/img/node_express.png',
    description: <>Start developing using TypeScript and build APIs using our template for express.js.</>,
  },
  // METROWORKER
  // {
  //   title: 'Metro Worker',
  //   href: '/metroworker',
  //   Svg: '???',
  //   description: <>Start reacting to Metro events using .NET.</>,
  // },
  // BLAZOR
  // {
  //   title: 'Blazor',
  //   href: '/blazor',
  //   Svg: '???',
  //   description: <>Start developing Blazor applications.</>,
  // },
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
