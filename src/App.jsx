import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default _ => (
  <div>
    <h1>Fundamentos React</h1>
    <Aleatorio min={10} max={30} />
    <Fragmento />
    <ComParametro titulo="Segundo componente" subtitulo="Andre" />
    <Primeiro />
  </div>
);
