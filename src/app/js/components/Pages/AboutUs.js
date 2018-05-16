import React from 'react';
import Layout from '../Layout/App';

const AboutUs = () => (
  <Layout>
    <main className="h-64 flex flex-col items-center justify-center text-white" style={{ background: "url('https://d1ydp7gtfj5fb9.cloudfront.net/static/img/views/about/banner.jpg?1501598696') no-repeat center center" }}>
      <h2 className="font-light mb-8">Apaixonados por saúde e tecnologia</h2>
      <h4 className="font-light">A mais inovadora empresa de software para gestão de clínicas e consultórios.</h4>
    </main>
  </Layout>
);

export default AboutUs;
