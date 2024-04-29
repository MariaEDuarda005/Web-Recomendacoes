import estilos from './Inicial.module.css'
import { Cabecalho } from '../componentes/Cabecalho' 
import { Lateral } from '../componentes/Lateral'
// import { Conteudo } from '../componentes/Conteudo'
import { Lista } from './Lista'
import { Outlet } from 'react-router-dom'


export function Inicial() {

  return (
      <div className={estilos.gridConteiner}>
        <Cabecalho/>
        <Lateral/>
        <Outlet />
      </div>
  )
}

// Outlet - ponto de entrada para dentro do compente inicial
