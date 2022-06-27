import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { B1175 } from '../components/models/B1175'

const B1175Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="B1 175">
        <B1175 />
      </Vistas>
    </Layout>
  )
}

export default B1175Page
