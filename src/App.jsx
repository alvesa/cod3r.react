import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import './App.css';
import Familia from './components/basicos/Familia';

export default _ => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="Desafio Aleatorio" color="#00C8F8">
        <Familia sobrenome="Ferreira">
        </Familia>
      </Card>
      <Card titulo="Desafio Aleatorio" color="#080">
        <Aleatorio min={10} max={30} />
      </Card>
      <Card titulo="Fragmento" color="#EC6">
        <Fragmento />
      </Card>
      <Card titulo="Com Parametro" color="#4F2">
        <ComParametro titulo="Segundo componente" subtitulo="Andre" />
      </Card>
      <Card titulo="Primeiro Component" color="#05A">
        <Primeiro />
      </Card>
    </div>
  </div>
);
