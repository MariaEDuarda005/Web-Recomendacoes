import estilos from './Cabecalho.module.css'

export function Cabecalho () {
    // Considerando que esse componente é unicamente para o cabeçalho 
        // a tag retornada será header
    return (
        <header className={estilos.conteiner}>
            <p>Recomendações</p>
        </header>
    )
}
