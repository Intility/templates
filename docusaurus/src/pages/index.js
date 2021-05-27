import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/dotnet">
            Create React App
          </Link>
          <br />
          <br />
          <Link className="button button--secondary button--lg" to="/dotnet">
            dotnet
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Intility templates for Intility developers">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
