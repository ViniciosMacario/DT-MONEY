import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './styles/global'
import { Model, createServer } from 'miragejs'

//Inicializando servidor fake
createServer({
  //Criando um banco de dados interno para receber os novos dados vindo da requisição 'Post'
  models: {
    transaction: Model,
  },

  //vamos definir valores pré-definidos no nosso banco de dados para deixar a UI mais amigável.
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'FreenLancer',
          amount: 8000,
          type: 'deposity',
          category: 'tecnology',
          date: new Date("2022-02-01")
        },
        {
          id: 2,
          title: 'transactions',
          amount: 400,
          type: 'withdrawal',
          category: 'food',
          date: new Date("2022-02-05")
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 600,
          type: 'withdrawal',
          category: 'house',
          date: new Date("2022-02-15")
        }
      ]
    })
  },

  //responsável por definir quais rotas teremos na Api fake
  routes(){
    //estamos dizendo que toda chamadas que vamos fazer no futuro, elas vão estar a partir da palavra '/api', toda requisição que tiver '/api' será captada
    this.namespace = 'api';

    //Verbo get
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)