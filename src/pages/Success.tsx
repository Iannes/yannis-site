import { NextPage } from 'next';
import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';

const Success: NextPage = () => (
  <Layout>
    <SEO title="Success: Form was submitted. " location="/success" />
    <h1>Your inquiry was submitted&#x21;</h1>
    <p>I&apos;ll get back to you as soon as possible&#x21;</p>
  </Layout>
);

export default Success;
