import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BDF190 } from '../components/models/BDF190'

const BDF190Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="BDF 190">
        <BDF190 />
      </Vistas>
    </Layout>
  )
}

export default BDF190Page
