import { useContext } from 'react'

import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

function Summary(){
  //sempre que o dado no contexto mudar, todo componente que estiver usando ele será rederizando novamente.
  const Transactions = useContext(TransactionsContext);

  console.log(Transactions)
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <BsArrowUpCircle color="green" fontSize={35}/>
        </header>
        <strong>R$5000.00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <BsArrowDownCircle color="red" fontSize={35}/>
        </header>
        <strong>- R$2000.00</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <RiMoneyDollarCircleLine fontSize={40}/>
        </header>
        <strong>R$3000.00</strong>
      </div>
    </Container>
  )
}

export {Summary};