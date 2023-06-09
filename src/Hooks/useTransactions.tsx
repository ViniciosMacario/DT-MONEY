import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../components/services/api";

type Transactions = {
  id: string;
  title: string;
  amount: number ;
  category: string;
  date: string;
  type: "deposity" | "withdrawal" | string;
}

// TransactionInput vai herdar todos os tipos do Transactions exceto os "id" e "data", o typescript usa o recurso 'Omit' para omitir esses tipos
// type TransactionInput = Omit<Transactions, 'id' |'data'>

type TransactionsProviderProps = {
  //ReactNode é um tipo do próprio React para qualquer coisa
  children: ReactNode;
}

type TransactionsContextData = {
  transactions: Transactions[],
  // Toda função assicrona retorna uma Promisse
  createTransaction: (transaction: Transactions) => Promise<void>;
}

//Criando um Contexto com "CreateContext", uma função nativa do próprio ReactJs.
  // {} as TransactionsContextData é uma tecnica usada para engana o Typscript para ele parar de reclamar da tipagem, pois precisamos iniciarlizar ela com um objeto vázio.
const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

//Para que nossa toda nossa aplicação/componentes tenham acesso ao nosso Contexto, é necessário coloca-los como filhos do "Provider", podemos envolver a aplicar no próprio arquivo "App"
export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() =>{
    api.get('/transactions')
      .then(response => {
        setTransactions(response.data.transactions)
      })
  },[])

  //Função responsável por criar uma nova transação e deixar disponível logo na requisição correta para renderizar na tela do usuário.
  async function createTransaction(transactionInput: Transactions){
    //Utilizando o mirageJs quando enviamos uma requisição, ele mesmo retorna o objeto enviado de volta.
    const response = await api.post('/transactions', transactionInput);

    //Vamos pegar o objeto retornado e adicionarmos ao novo estado para ele ser atualizado imediatamente.
    const { transaction } = response.data;

    //Respeitando o principio da imutabilidade
    setTransactions([...transactions, transaction])
  }

  return (
    //o Provider obrigatoriamente precisa receber o atributo "value"
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

// Um hook pode importar outros hooks, estamos apenas fazendo isso para reduzir a quantidade de importações nos nossos componentes.
export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}