import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import './App.css';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/TabelaProdutos/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';

export default _ => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="Componente Controlado" color="#DA4531">
        <Input></Input>
      </Card>
      <Card titulo="Comunicacao Indireta" color="#C41F5B">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="Comunicacao Direta" color="#F32C7A">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="Renderizacao condicional" color="#7F32CE">
        <ParOuImpar numero={23}></ParOuImpar>
        <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
      </Card>
      <Card titulo="Desafio Lista de alunos" color="#8CD512">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="Lista de alunos">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="Componentes com filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"></FamiliaMembro>
          <FamiliaMembro nome="Gustavo"></FamiliaMembro>
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
