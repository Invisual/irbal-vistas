import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { Ecomix150 } from '../components/models/Ecomix150'

const Ecomix150Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Ecomix 150">
        <Ecomix150 />
      </Vistas>
    </Layout>
  )
}

export default Ecomix150Page
