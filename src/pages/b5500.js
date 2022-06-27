import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { B5500 } from '../components/models/B5500'

const B5500Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="B5 500">
        <B5500 />
      </Vistas>
    </Layout>
  )
}

export default B5500Page
