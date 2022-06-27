import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BaldeSoldado175 } from '../components/models/BaldeSoldado175'

const BaldeSoldado175Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Balde Soldado 175">
        <BaldeSoldado175 />
      </Vistas>
    </Layout>
  )
}

export default BaldeSoldado175Page
