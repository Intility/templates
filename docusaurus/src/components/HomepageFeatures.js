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
    title: '.NET',
    href: '/dotnet',
    Svg: '/img/dotnet-logo.svg',
    description: (
      <>Start developing APIs using our template for the dotnet CLI.</>
    ),
  },
  // PYTHON
  // {
  //   title: 'python',
  //   href: '/python',
  //   Svg: '/img/python-logo.svg',
  //   description: (
  //     <>
  //       "Python er best" - jonas 2019
  //       "Python er best" - jonas 2020
  //       "Python er best" - jonas 2021
  //     </>
  //   ),
  // },
  // EXPRESS
  // {
  //   title: 'express.js',
  //   href: '/express',
  //   Svg: '???',
  //   description: <>Start developing APIs using our template for express.js.</>,
  // },
];

function Feature({ id, Svg = 'div', title, href, description }) {
  return (
    <div
      className={clsx('col col--4', {
        'col--offset-2': FeatureList.length === 2 && !id,
      })}
    >
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
