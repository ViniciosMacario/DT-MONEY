import { Container } from "./styles";
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

function Summary(){
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
        <strong>R$2000.00</strong>
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