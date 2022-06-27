import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BaldeSoldado200 } from '../components/models/BaldeSoldado200'

const BaldeSoldado200Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Balde Soldado 200">
        <BaldeSoldado200 />
      </Vistas>
    </Layout>
  )
}

export default BaldeSoldado200Page
