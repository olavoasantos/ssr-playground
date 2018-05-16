import React from 'react';
import { Link } from './Link';

const Nav = () => (
  <nav className="w-full bg-white text-blue p-6 shadow">
    <ul className="container mx-auto list-reset flex items-center">
      <li className="mr-4 w-8 h-8"><img src="//static.sa-east-1.iclinic.com.br/static/v2/img/common/logo_iclinic.png" alt="iClinic"/></li>
      <li className="mr-4">
        <Link to="/">Principal</Link>
      </li>
      <li className="mr-4">
        <Link to="/precos">Preços</Link>
      </li>
      <li className="mr-4">
        <Link to="/quem-somos">Sobre nós</Link>
      </li>
      <li className="mr-4">
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
