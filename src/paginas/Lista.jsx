import estilos from './Lista.module.css'
import { Filme } from '../componentes/Filme'
//import { Card } from '../componentes/Card'

export function Lista(){
    return(
        <main className={estilos.conteiner}>
            <Filme />
        </main>
    )
}