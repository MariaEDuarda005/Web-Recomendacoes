import estilos from './Lateral.module.css'

export function Lateral () {
    // Considerando que esse componente é unicamente para a lateral 
    // a tag retornada será aside
    return (
        <aside className={estilos.conteiner}>
            <h2>Lateral</h2>
        </aside>
    )
}
