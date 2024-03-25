import estilos from './Lateral.module.css'

export function Lateral () {
    // Considerando que esse componente é unicamente para a lateral 
    // a tag retornada será aside
    return (
        <aside className={estilos.conteiner}>

            <header>
                <img 
                    className={estilos.imagemCabecalho}
                    src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            
                <div className={estilos.perfil}>
                    <img 
                        className={estilos.avatar}
                        src="https://avatars.githubusercontent.com/u/152435513?s=400&u=0ec86c20aae2ae8ec20a8c44d0ba0595a52f11f5&v=4"
                    />
                    <strong>Maria Eduarda</strong>
                </div>       
            </header> 

            {/* <section>
                <p>Perfil</p>
            </section> */}

        </aside>


    )
}
