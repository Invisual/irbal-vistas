import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { Promix175 } from '../components/models/Promix175'

const Promix175Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Promix 175">
        <Promix175 />
      </Vistas>
    </Layout>
  )
}

export default Promix175Page
