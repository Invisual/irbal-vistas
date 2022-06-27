import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { B2300 } from '../components/models/B2300'

const B2300Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="B2 300">
        <B2300 />
      </Vistas>
    </Layout>
  )
}

export default B2300Page
