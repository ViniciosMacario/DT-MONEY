import { Container, Content, ContentLogo } from './styles';
import LogoSvg from '../../assets/logo.svg'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}


function Header({ onOpenNewTransactionModal }: HeaderProps){
  return (
    <Container>
      <Content>
        <ContentLogo>
          <img src={LogoSvg} alt='DT.MONEY_LOGO' />
          <strong>DT MONEY</strong>
        </ContentLogo>
        <button type='button' onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}
//AiFillDollarCircle
//RiMoneyDollarCircleLine
//BiDollar
//BsArrowDownCircle
export { Header };
