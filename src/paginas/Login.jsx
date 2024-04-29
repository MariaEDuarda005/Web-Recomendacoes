import { useState } from 'react'
import estilos from './Login.module.css'
import { useNavigate } from 'react-router-dom'

export function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    function obterDadosFormularios(e){
        // e.preventDefault()
        // console.log(`Usuario: ${usuario}`)
        // console.log(`Senha: ${senha}`)

        navigate('inicial')
    }

    return(
        <div className={estilos.conteiner}>
            <form 
                className={estilos.formulario}
                onSubmit={obterDadosFormularios}
            >

                <input 
                    className={estilos.campo}
                    placeholder="Usuario" 
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
                <input 
                    className={estilos.campo}
                    placeholder="Senha" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <button
                    className={estilos.botao}
                >Entrar</button>
            </form>
        </div>
    )
}
