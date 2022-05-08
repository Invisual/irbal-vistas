import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Main = styled.main`
  width: 100%;

  .vista {
    position: relative;
    text-align: center;
  }

  .vista #ECOMIX_130 {
    g,
    rect {
      transform-origin: center center;
      transition: all 0.25s ease;
      position: relative;
      cursor: pointer;
    }

    image,
    rect {
      opacity: 0.5;
    }

    rect[data-url] {
      opacity: 1;
    }
  }

  .title {
    position: fixed;
    background: blue;
    color: white;
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 15px;
    animation: ${fadeIn} 0.5s;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.blue};
  }
`

export const Styled = {
  Main,
}
