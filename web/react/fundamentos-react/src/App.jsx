import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro.jsx';
import Card from './components/layout/Card.jsx';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from "./components/comunicacao/direta/Pai"
import Super from  "./components/comunicacao/indireta/Super"
import Input from "./components/form/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
<div className="Cards">
    <Card titulo="#11 - Gerador Mega-Sena" color="#607D8B">
      <Mega qtdNumero={8}></Mega> 
    </Card>
    <Card titulo="#10 - Contador" color="#607D8B">
      <Contador></Contador>
    </Card>
    <Card titulo="#09 - Input" color="#5D4037">
      <Input></Input>
    </Card>
    <Card titulo="#08 - Comunicação Indireta" color="#283593">
      <Super></Super>
    </Card>
    <Card titulo="#07 - Comunicação Direta" color="#E91E63D">
      <Pai></Pai>
    </Card>
    <Card titulo="#06 - Condicional com If" color="#58D68D">
        <CondicionalComIf numero={11}></CondicionalComIf>
    </Card>
    <Card titulo="#05 - Condicional" color="#C0392B">
        <Condicional numero={11}></Condicional>
    </Card>
    <Card titulo="#04 - Repetição" color="#F39C12">
        <Repeticao></Repeticao>
    </Card>
    <Card titulo="#03 - Componente com Filhos" color="#2E86C1">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#02 - Componente com Parâmetro" color="#7D3C98">
      <ComParametro titulo="Esse é o Título" subtitulo="Esse é o Subtítulo" />
    </Card>
    <Card titulo="#01 - Primeiro Componente" color="#E74C3C">
      <Primeiro />
    </Card>
</div>
  </div>
);
