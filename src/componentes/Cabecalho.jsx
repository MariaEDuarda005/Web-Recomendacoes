import estilos from './Cabecalho.module.css';
import { FilmReel, FilmStrip } from "@phosphor-icons/react";

export function Cabecalho () {
    // Considerando que esse componente é unicamente para o cabeçalho 
        // a tag retornada será header
    return (
        <header className={estilos.conteiner}>
            <FilmReel 
                weight='duotone'
                size={34}
                color='#dcdcdd'
            />
            <p>Recomendações</p>

            <FilmStrip
                weight='duotone'
                size={34}
                color='#dcdcdd'
            />
        </header>
    )
}
