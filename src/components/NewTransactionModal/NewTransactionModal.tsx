import { useState, FormEvent } from 'react'; 
import { useTransactions } from '../../Hooks/useTransactions';
import Modal from 'react-modal';
import { v4 } from 'uuid'

import { GrClose } from 'react-icons/gr';
import { BsArrowDownCircle,BsArrowUpCircle } from 'react-icons/bs';
import { RadioButton, Container,TransactionTypeContainer } from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

function NewTransactionModal({ isOpen, onClose }:NewTransactionModalProps){
  //Acessando as transações dentro do contexto.
    const { createTransaction } = useTransactions();


  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('deposity');
  //Quando passamos uma função para o evento "onSubmit" ela retorna para a própria função Dados/informações do próprio evento
  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    //Enviado dados do usuário para a Api fazer a requisição post
    await createTransaction({ 
      id: v4(),
      title,
      amount,
      category,
      type,
      date: String(new Date()),
    })
    
    //Resetando o formulário depois da requisição ser feita
    setTitle('');
    setAmount(0);
    setCategory('')
    setType('deposity')
    //Fechando o modal após aguardar a requisição acima terminar
    onClose();
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type='button' className='react-modal-close' onClick={onClose}>
        <GrClose title='closeIcon' color='#c10f0f' />
      </button>
      
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder='Título'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='number'
          placeholder='Valor'
          value={amount}
          // e.target.value retorna uma string e mesmo que vc informe que é um number, não vai funcionar, é necessário fazer uma conversão
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioButton 
            type='button'
            isActive={type === 'deposity'}
            color='#33CC95'
            onClick={() => setType('deposity')}
          >
            <BsArrowUpCircle color='green' fontSize={25}/>
            <span>Entrada</span>
          </RadioButton>

          <RadioButton
            type='button'
            color='#e52e4d'
            isActive={type === 'withdrawal'}
            onClick={() => setType('withdrawal')}
          >
            <BsArrowDownCircle color='red' fontSize={25}/>
            <span>Saida</span>
          </RadioButton>

        </TransactionTypeContainer>
        <input
          placeholder='Categoria'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Confirmar</button>
      </Container>
    </Modal>
  )
};

export {NewTransactionModal};