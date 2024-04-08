import estilos from './Filme.module.css'
import poster from '../assets/poster.jpg'
import { Card } from './Card'

export function Filme({propsFilme}){

    const link = `https://image.tmdb.org/t/p/w400${propsFilme.poster_path}`

    return(
        <Card>
            <figure className={estilos.conteiner}>
                <img src={link}/>
                <figcaption>{ propsFilme.title }</figcaption>
                <p>{propsFilme.overview}</p>
                <p>Avaliação: {propsFilme.vote_average}</p>
            </figure>
        </Card>
    )
}