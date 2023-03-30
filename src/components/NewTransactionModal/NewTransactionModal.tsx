import Modal from 'react-modal'
import { Container } from './styles';
import { GrClose } from 'react-icons/gr'

type NewTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
}


function NewTransactionModal({ isOpen, onClose }:NewTransactionModalProps){
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
        <input
          placeholder='Categoria'
        />

        <button type="submit">Confirmar</button>
      </Container>
    </Modal>
  )
};

export {NewTransactionModal};