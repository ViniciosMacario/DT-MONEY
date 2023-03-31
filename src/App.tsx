import { useState } from 'react'
import { DashBoard } from "./components/DashBoard/DashBoard";
import { Header } from "./components/Header/Header";
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Ele vai impedir que o usuário que use recursos de acessibilidade não interaja com os elementos abaixo do modal.
Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

  function HandleOpenisNewTransactionModalOpen() {
    SetIsNewTransactionModalOpen(true);
  }

  function HandleCloseisNewTransactionModalOpen() {
    SetIsNewTransactionModalOpen(false);
  }


  return (
    //o Provider obrigatoriamente precisa receber o atributo "value"
    <TransactionsContext.Provider value={[1]}>
      <Header onOpenNewTransactionModal={HandleOpenisNewTransactionModalOpen}/>
      <DashBoard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onClose={HandleCloseisNewTransactionModalOpen}
      />
    </TransactionsContext.Provider>
  )
};

