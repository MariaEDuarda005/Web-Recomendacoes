import estilos from './Cabecalho.module.css'

export function Cabecalho () {
    // Considerando que esse componente é unicamente para o cabeçalho 
        // a tag retornada será header
    return (
        <header className={estilos.conteiner}>
            <h1>Recomendações</h1>
        </header>
    )
}
