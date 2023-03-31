import { createContext } from "react";

//Criando um Contexto com "CreateContext", uma função nativa do próprio ReactJs.
export const TransactionsContext = createContext([]);

//Para que nossa toda nossa aplicação/componentes tenham acesso ao nosso Contexto, é necessário coloca-los como filhos do "Provider", podemos envolver a aplicar no próprio arquivo "App"
