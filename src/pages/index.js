import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <Layout title="NextCitizens" description="NextCitizens is a powerful and optimized core for your FiveM server based on RolePlay.">
      <meta http-equiv = "refresh" content = "0; url = /framework/home" />
    </Layout>
  );
}