import React from 'react';
import Layout from '../Layout/App';

const Home = () => (
  <Layout>
    <main className="container mx-auto mt-8">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-4xl text-grey-darkest mb-8">O Software Médico que organiza e agiliza sua clínica</h1>
        <p className="text-grey-dark mb-8">Tenha mais praticidade no seu dia a dia com o software para clínicas mais fácil de usar. Dê o primeiro passo agora:</p>
        <button className="block rounded bg-orange hover:bg-orange-dark text-white px-8 py-2 my-4">Quero fazer um teste grátis</button>
        <small className="text-grey-dark">Teste grátis sem compromisso. Não pedimos cartão de crédito.</small>
      </div>
    </main>
  </Layout>
);

export default Home;
