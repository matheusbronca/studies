import React from 'react';
import Filho from './Filhos.jsx';

export default (props) => (
  <div>
    <Filho sobrenome="Silva">João</Filho>
    <Filho sobrenome="Silva">Maria</Filho>
    <Filho sobrenome="Silva">Pedro</Filho>
  </div>
);
