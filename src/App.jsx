// impotação dos componentes que irá estruturar a pagina
import { Cabecalho } from './componentes/Cabecalho' 
import { Lateral } from './componentes/Lateral'
import { Conteudo } from './componentes/Conteudo'

import estilos from './App.module.css'

// através do module se pré define um style sheet
// seprando o arquivo de estilização e importa em formato de objeto e suas classes
// aplica pequenas partes do css (classes) em cada componente (estrutura html do react)

// função que gera um trecho de html quando for rebnderizado
function App() {
  // antes disso podem ser desenvolvimentda diferentes regras

  // quando a referencia é por tag não precisa passar o estilo
  return (
      <div className={estilos.gridConteiner}>
        <Cabecalho/>
        <Lateral/>
        <Conteudo/>
      </div>
  )
}

// exportação da função (estrutura html) que deixa disponibel para importação em outra página
// como essa que esta sendo usada na main
export default App
