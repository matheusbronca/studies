import './App.css';
import React from 'react';

import Primeiro from './components/layout/Primeiro.jsx';
import Card from './components/layout/Card.jsx';
import ComParametro from './components/layout/ComParametro';
import ComFilhos from './components/layout/ComFilhos';
import Repeticao from './components/layout/Repeticao';
import Condicional from './components/layout/Condicional';
import CondicionalComIf from './components/layout/CondicionalComIf';

export default (props) => (
  <div className="App">
    <Card titulo="#06 - Condicional com If">
        <CondicionalComIf numero={11}></CondicionalComIf>
    </Card>
    <Card titulo="#05 - Condicional">
        <Condicional numero={11}></Condicional>
    </Card>
    <Card titulo="#04 - Repetição">
        <Repeticao></Repeticao>
    </Card>
    <Card titulo="#03 - Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#02 - Componente com Parâmetro">
      <ComParametro titulo="Esse é o Título" subtitulo="Esse é o Subtítulo" />
    </Card>
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
