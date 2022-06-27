import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { B4410 } from '../components/models/B4410'

const B4410Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="B4 410 Reforçada">
        <B4410 />
      </Vistas>
    </Layout>
  )
}

export default B4410Page
