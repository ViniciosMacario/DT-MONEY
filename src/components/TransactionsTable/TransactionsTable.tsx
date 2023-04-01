import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./style";

function TransactionsTable(){
  const { transactions } = useContext(TransactionsContext);

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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {/* Formatando moeda com api nativa do javascript*/}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {/* Formatando data, sua formatação deve ser "Year-mount-data" */}
                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.date))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
};

export { TransactionsTable };