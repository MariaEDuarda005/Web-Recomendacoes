import { zodResolver } from '@hookform/resolvers/zod'
import estilos from './Perfil.module.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const schemaPerfil = z.object({

    nome: z.string()
        .min(1, "Informe um nome")
        .max(100, "Maximo de 100 caracteres"),

    usuario: z.string()
        .min(5, "Minimo de 5 caracteres")
        .max(30, "Maximo de 30 caracteres"),

    senha: z.string()
        .min(5, "Minimo de 5 caracteres")
        .max(30, "Maximo de 30 caracteres"),

})


export function Perfil(){

    const { 
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schemaPerfil)
    })

    function obterDadosFormulario(data){
        console.log(data)
        console.log(`Nome: ${data.nome}`)
        console.log(`Usuario: ${data.usuario}`)
        console.log(`Senha: ${data.senha}`)
    }

    return(
        <div className={estilos.conteiner}>

            <p className={estilos.titulo}>Perfil</p>

            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >
                
                <input 
                    {...register('nome')}
                    className={estilos.campo}
                    placeholder="Nome" 
                />
                {errors.nome && (
                    <p className={estilos.p}>
                        {errors.nome.message}
                    </p>
                )}
              
                
                <input 
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder="Usuario" 
                />
                {errors.usuario && (
                    <p className={estilos.p}>
                        {errors.usuario.message}
                    </p>
                )}

                
                <input 
                    {...register('senha')}
                    className={estilos.campo}
                    placeholder="Senha" 
                />
                {errors.senha && (
                    <p className={estilos.p}>
                        {errors.senha.message}
                    </p>
                )}
                

                <button
                    className={estilos.botao}
                >Confirmar</button>
            </form>
        </div>
    )
}

// && - funciona como um if