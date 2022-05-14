import styled from 'styled-components'

const SearchContainer = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacingM};

  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${({ theme }) => theme.spacingM};
    place-items: center;
    margin-top: ${({ theme }) => theme.spacingM};

    @media screen and (max-width: 1450px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
      gap: ${({ theme }) => theme.spacingM} 2rem;
    }

    @media screen and (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }
`

const Input = styled.input`
  width: 30rem;
  height: 5rem;
  max-width: 90%;
  padding: ${({ theme }) => theme.spacingS};
  background: ${({ theme }) => theme.offWhite};
  color: ${({ theme }) => theme.black};
  font-size: 1.4rem;
  border-radius: 2px;
  border: 2px solid #f1f1f1;

  &:focus,
  :active,
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.blue};
  }
`

export const Styled = {
  Input,
  SearchContainer,
}
