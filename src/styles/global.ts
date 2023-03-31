import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;
    --blue-light: #6933ff;

    --text-title: #363F5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      //16 X 0.9375 = 15px
      font-size: 93.75%; 
    }
    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  body{
    background: var(--background);
  }

  button{
    cursor: pointer;
  }

  //O input, textarea, button não importam por padrão a font diretamente do body, é necessário definir elas isoladamente.
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0,0,0,0.5);
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    padding: 3rem;

    position: relative;

    border-radius: 0.24rem;
    background: var(--background);
  }
  .react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: transform 0.3s;
    &:hover{
      transform: rotate(90deg);      fill: red;

    }

    path{
      stroke-width: 3px;
      stroke: #363F5f;
    }
  }
`
