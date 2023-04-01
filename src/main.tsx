import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './styles/global'
import { createServer } from 'miragejs'

//Inicializando servidor fake
createServer({
  //responsável por definir quais rotas teremos na Api fake
  routes(){
    //estamos dizendo que toda chamadas que vamos fazer no futuro, elas vão estar a partir da palavra '/api', toda requisição que tiver '/api' será captada
    this.namespace = 'api';

    //Verbo get
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transactions',
          amount: 400,
          type: 'deposity',
          category: 'food',
          data: new Date()
        }
      ]
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return data;
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)