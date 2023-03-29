import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  color: white;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong{
    letter-spacing: 1.5px;
  }

  button {
    height: 3rem;
    padding: 0 2rem;

    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(1.2);
    }
  }
`

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`