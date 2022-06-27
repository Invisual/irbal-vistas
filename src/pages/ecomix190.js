import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { Ecomix190 } from '../components/models/Ecomix190'

const Ecomix190Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Ecomix 190">
        <Ecomix190 />
      </Vistas>
    </Layout>
  )
}

export default Ecomix190Page
