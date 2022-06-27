import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BaldeSoldado280 } from '../components/models/BaldeSoldado280'

const BaldeSoldado280Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Balde Soldado 280">
        <BaldeSoldado280 />
      </Vistas>
    </Layout>
  )
}

export default BaldeSoldado280Page
