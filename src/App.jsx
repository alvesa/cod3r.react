import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

export default _ => (
  <div>
    <h1>Fundamentos React</h1>
    <Card titulo="Desafio Aleatorio">
      <Aleatorio min={10} max={30} />
    </Card>
    <Card titulo="Fragmento">
      <Fragmento />
    </Card>
    <Card titulo="Com Parametro">
      <ComParametro titulo="Segundo componente" subtitulo="Andre" />
    </Card>
    <Card titulo="Primeiro Component">
      <Primeiro />
    </Card>
  </div>
);
