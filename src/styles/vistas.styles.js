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

    svg {
      max-width: 100%;
      height: auto;
      overflow: visible;
    }
  }

  .vista .vista-g {
    g,
    image,
    rect {
      transform-origin: center center;
      transition: all 0.25s ease;
      position: relative;
    }

    image,
    rect {
      opacity: 0.5;
    }

    rect[data-url],
    image[data-url] {
      opacity: 1;
      cursor: pointer;
    }
  }

  .title {
    position: fixed;
    background: blue;
    color: white;
    border-radius: 10px;
    font-size: 1.5rem;
    line-height: 2.3rem;
    padding: 15px;
    animation: ${fadeIn} 0.5s;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.blue};
  }

  @media screen and (max-width: 550px) {
    .vista {
      margin-top: ${({ theme }) => theme.spacingS};
    }

    .title {
      font-size: 1.2rem;
      line-height: 1.9rem;
      padding: 10px;
    }
  }
`

export const Styled = {
  Main,
}
