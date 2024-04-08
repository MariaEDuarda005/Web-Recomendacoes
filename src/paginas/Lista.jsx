import estilos from './Lista.module.css'
import { useEffect } from 'react'
import { Filme } from '../componentes/Filme'
import { useState } from 'react'
//import { Card } from '../componentes/Card'

//programação assíncrona (executada em segundo plano) é uma técnica que permite que seu programa inicie uma tarefa potencialmente de longa duração e ainda seja capaz de responder a outros eventos enquanto essa tarefa é executada

export function Lista(){

    // para armazenar as informações
    const [filmes, setFilmes]= useState([])

    const apiKey = "b30f8aca67ba360f218e6273e6cd65bd"

    // quando carregar o ambiente lista ele vai executar a função
    // then espera a execução do fetch, ele faz a conversão
    // fetch pega os dados e o then trata as respostas
    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&language=pt-BR`)
        .then(resposta => resposta.json())
        .then(dados => setFilmes(dados.results))


    }, [])

    // map pega o vetor e executa em cada uma posição do vetor
    return(
        <main className={estilos.conteiner}>
            
            { filmes.map( umFilme => <Filme propsFilme={umFilme} /> ) }

        </main>
    )
}