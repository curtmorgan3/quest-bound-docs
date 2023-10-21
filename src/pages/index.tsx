import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className='stack'>
      <div className='row' style={{ gap: '32px', alignItems: 'center', justifyContent: 'center' }}>
        <img alt='Quest Bound' src='/img/QB_monogram.svg' style={{ height: 250, width: 250 }} />
        <div className='stack' style={{ textAlign: 'center' }}>
          <h1>Quest Bound Documentation</h1>
          <h3>Learn how to make your own rules</h3>
        </div>
      </div>

      <div className={styles.buttons}>
        <Link className='button button--secondary button--lg' to='/docs/intro'>
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
