import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./style";

function TransactionsTable(){
  const transactions = useContext(TransactionsContext);

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
          {transactions.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className={item.type}>
                {/* Formatando moeda com api nativa do javascript*/}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.amount)}
              </td>
              <td>{item.category}</td>
              <td>
                {/* Formatando data, sua formatação deve ser "Year-mount-data" */}
                {new Intl.DateTimeFormat('pt-BR').format(new Date(item.data))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
};

export { TransactionsTable };