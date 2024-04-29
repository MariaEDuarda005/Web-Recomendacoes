import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './rotas/Rotas'

export function App() {
  // app só está chamando o primera tela
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  )
}




