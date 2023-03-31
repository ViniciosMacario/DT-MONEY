import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./components/services/api";

type Transactions = {
  id: number;
  title: string;
  amount: number;
  category: string;
  data: string;
  type: "deposity" | "withdrawal";
}

type TransactionsProviderProps = {
  //ReactNode é um tipo do próprio React para qualquer coisa
  children: ReactNode;
}


//Criando um Contexto com "CreateContext", uma função nativa do próprio ReactJs.
export const TransactionsContext = createContext<Transactions[]>([]);

//Para que nossa toda nossa aplicação/componentes tenham acesso ao nosso Contexto, é necessário coloca-los como filhos do "Provider", podemos envolver a aplicar no próprio arquivo "App"
export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() =>{
    api.get('/transactions')
      .then(response => setTransactions(response.data))
  },[])

  return (
    //o Provider obrigatoriamente precisa receber o atributo "value"
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}