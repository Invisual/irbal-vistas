import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BaldeSoldado220 } from '../components/models/BaldeSoldado220'

const BaldeSoldado220Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Balde Soldado 220">
        <BaldeSoldado220 />
      </Vistas>
    </Layout>
  )
}

export default BaldeSoldado220Page
