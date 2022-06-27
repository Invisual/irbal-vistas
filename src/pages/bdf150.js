import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { BDF150 } from '../components/models/BDF150'

const BDF150Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="BDF 150">
        <BDF150 />
      </Vistas>
    </Layout>
  )
}

export default BDF150Page
