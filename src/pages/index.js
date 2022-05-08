import React, { useState } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Product } from '../components/Product'
import { produtos } from '../produtos'
import { Styled } from '../styles/index.styles'

const IndexPage = () => {
  const [query, setQuery] = useState('')

  const visibleProducts = produtos.filter((prod) =>
    prod.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Layout>
      <SEO />
      <h1 className="main-title">Vistas Explodidas</h1>
      <p className="main-desc">
        Pesquise aqui o modelo da da sua betoneira para encontrar as peças que
        precisa
      </p>

      <Styled.SearchContainer>
        <Styled.Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquise a sua betoneira"
        />

        <div className="products">
          {visibleProducts.map((prod) => (
            <Product key={prod.id} product={prod} />
          ))}
        </div>
      </Styled.SearchContainer>
    </Layout>
  )
}

export default IndexPage
