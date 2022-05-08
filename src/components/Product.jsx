import React from 'react'
import styled from 'styled-components'

export const Product = ({ product }) => (
  <StyledProduct href={product.id} target="_blank">
    <div className="image">
      <img src={product.img} alt={product.title} />
    </div>
    <h4>{product.title}</h4>
  </StyledProduct>
)

const StyledProduct = styled.a`
  width: 100%;
  height: 100%;
  text-align: left;
  cursor: pointer;

  .image  {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.offWhite};
    overflow: hidden;
    transition: background 0.25s ease;

    img {
      max-width: 90%;
      max-height: 80%;
      object-fit: cover;
    }
  }

  h4 {
    color: ${({ theme }) => theme.blue};
    font-size: 1.75rem;
    font-weight: ${({ theme }) => theme.fontMedium};
    margin-top: ${({ theme }) => theme.spacingXS};
  }

  &:hover {
    .image {
      background: rgba(219, 133, 86, 0.1);
    }
  }
`
