import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { Promix190 } from '../components/models/Promix190'

const Promix190Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Promix 190">
        <Promix190 />
      </Vistas>
    </Layout>
  )
}

export default Promix190Page
