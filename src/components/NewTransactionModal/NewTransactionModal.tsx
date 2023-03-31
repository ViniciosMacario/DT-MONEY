import Modal from 'react-modal'
import { RadioButton, Container,TransactionTypeContainer } from './styles';
import { GrClose } from 'react-icons/gr'
import { BsArrowDownCircle,BsArrowUpCircle } from 'react-icons/bs'
import { useState } from 'react';

type NewTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
}


function NewTransactionModal({ isOpen, onClose }:NewTransactionModalProps){
  const [type, setType] = useState('deposity');
  console.log(type)

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
      
      <Container>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder='Título'
        />
        <input
          type='number'
          placeholder='Valor'
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
        />

        <button type="submit">Confirmar</button>
      </Container>
    </Modal>
  )
};

export {NewTransactionModal};