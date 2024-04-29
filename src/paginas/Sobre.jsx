import estilos from './Sobre.module.css'

export function Sobre(){
    return(
        <div className={estilos.conteiner}>
            <p className={estilos.titulo}>Sobre</p>
            <img 
                    className={estilos.imagem}
                    src="https://avatars.githubusercontent.com/u/152435513?s=400&u=0ec86c20aae2ae8ec20a8c44d0ba0595a52f11f5&v=4"
                />

            <div className={estilos.textos}>
                <p className={estilos.text}>Me chamo Maria Eduarda</p>
                <p className={estilos.text}>19 anos</p>
                <p className={estilos.text}>DS8</p>
            </div>

        </div>
    )
}