import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { Ecomix170 } from '../components/models/Ecomix170'

const Ecomix170Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Ecomix 170">
        <Ecomix170 />
      </Vistas>
    </Layout>
  )
}

export default Ecomix170Page
