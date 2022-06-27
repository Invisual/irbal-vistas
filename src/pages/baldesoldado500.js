import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BaldeSoldado500 } from '../components/models/BaldeSoldado500'

const BaldeSoldado500Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Balde Soldado 500">
        <BaldeSoldado500 />
      </Vistas>
    </Layout>
  )
}

export default BaldeSoldado500Page
