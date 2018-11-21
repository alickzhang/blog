import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import config from '../../data/SiteConfig';

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}