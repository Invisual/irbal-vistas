import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BDF170 } from '../components/models/BDF170'

const BDF150Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="BDF 170">
        <BDF170 />
      </Vistas>
    </Layout>
  )
}

export default BDF150Page
