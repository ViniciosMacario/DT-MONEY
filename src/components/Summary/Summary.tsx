import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { useTransactions } from "../../Hooks/useTransactions";

import { Container } from "./styles";

function Summary(){
  //sempre que o dado no contexto mudar, todo componente que estiver usando ele será rederizando novamente.
  const { transactions } = useTransactions();


  const summary = transactions.reduce((acumulator, transaction) => {
    if(transaction.type === 'deposity'){
      acumulator.deposity += transaction.amount
      acumulator.total += transaction.amount
    }else{
      acumulator.withdrawal += transaction.amount
      acumulator.total -= transaction.amount
    }

    return acumulator
    
    //Definindo valor padrão
  }, {deposity: 0,withdrawal: 0,total: 0})

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <BsArrowUpCircle color="green" fontSize={35}/>
        </header>
        <strong >
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposity)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <BsArrowDownCircle color="red" fontSize={35}/>
        </header>
        <strong >
          - 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdrawal)}          
        </strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <RiMoneyDollarCircleLine fontSize={40}/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}

export {Summary};