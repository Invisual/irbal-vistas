import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { B3400 } from '../components/models/B3400'

const B3400Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="B3 400">
        <B3400 />
      </Vistas>
    </Layout>
  )
}

export default B3400Page
