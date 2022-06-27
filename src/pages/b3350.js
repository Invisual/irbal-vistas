import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { B3350 } from '../components/models/B3350'

const B3350Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="B3 350">
        <B3350 />
      </Vistas>
    </Layout>
  )
}

export default B3350Page
