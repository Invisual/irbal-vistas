import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BaldeSoldado350 } from '../components/models/BaldeSoldado350'

const BaldeSoldado350Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Balde Soldado 350">
        <BaldeSoldado350 />
      </Vistas>
    </Layout>
  )
}

export default BaldeSoldado350Page
