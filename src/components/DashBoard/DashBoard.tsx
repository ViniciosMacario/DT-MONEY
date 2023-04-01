import { Summary } from "../Summary/Summary"
import { TransactionsTable } from "../TransactionsTable/TransactionsTable"
import { Container } from "./styles"

function DashBoard(){
  return (
    <>
      <Container>
        <Summary/>
        <TransactionsTable/>
      </Container>
    </>
  )
};

export {DashBoard}