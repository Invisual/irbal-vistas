import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { B2250 } from '../components/models/B2250'

const B2250Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="B2 250">
        <B2250 />
      </Vistas>
    </Layout>
  )
}

export default B2250Page
