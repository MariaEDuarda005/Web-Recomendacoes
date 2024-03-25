import estilos from './Filme.module.css'
import poster from '../assets/poster.jpg'
import { Card } from './Card'

export function Filme(){
    return(
        <Card>
            <figure className={estilos.conteiner}>
                <img src={poster}/>
                <figcaption>Duna: Parte 2 (2024)</figcaption>
                <p>Continua a explorar a viagem de Paul Atreides   que agora se une a Chani e aos Fremen para vingar a conspiração que destruiu a sua família. Ao enfrentar uma escolha entre o amor e o destino do universo, lutará para evitar o futuro terrível que só ele pode prever.</p>
                <p>84</p>
            </figure>
        </Card>
    )
}