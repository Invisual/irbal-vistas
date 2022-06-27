import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { B1200 } from '../components/models/B1-200'

const B1200Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="B1 200">
        <B1200 />
      </Vistas>
    </Layout>
  )
}

export default B1200Page
