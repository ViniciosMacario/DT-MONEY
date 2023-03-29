import { Container, Content, ContentLogo } from './styles';
import LogoSvg from '../../assets/logo.svg'

function Header(){
  return (
    <Container>
      <Content>
        <ContentLogo>
          <img src={LogoSvg} alt='DT.MONEY_LOGO' />
          <strong>DT MONEY</strong>
        </ContentLogo>
        <button type='button'>Nova transação</button>
      </Content>
    </Container>
  )
}
//AiFillDollarCircle
//RiMoneyDollarCircleLine
//BiDollar
//BsArrowDownCircle
export { Header };
