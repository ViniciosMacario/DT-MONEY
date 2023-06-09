import styled from "styled-components";
import { darken, transparentize } from "polished";


export const Container = styled.form`
  h2{
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }
  input{
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }
    //Estilizando a partir do segundo input
    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
  
    cursor: pointer;
    color: #FFF;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    border: none;
    border-radius: 0.25rem;
    background: var(--green);

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  }
`
type RadioButtonProps = {
  isActive: boolean;
  color: string;
}


export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: ${(props) => props.isActive ? transparentize(0.1, props.color) : 'transparent'};

  transition: all 0.2s;

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${(props) => props.isActive ? 'white' : 'var(--text-title)'};
  }
  path{
    color: ${(props) => props.isActive ? 'white' : 'inhent'};
  }

  &:hover{
    border-color: ${darken(0.2, '#d7d7d7')};
  }
`