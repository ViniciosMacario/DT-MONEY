import { Container } from "./style";

function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="widthdraw"> - R$850</td>
            <td>casa</td>
            <td>15/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
};

export { TransactionsTable };