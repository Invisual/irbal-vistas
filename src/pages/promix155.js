import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { Promix155 } from '../components/models/Promix155'

const Promix155Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Promix 155">
        <Promix155 />
      </Vistas>
    </Layout>
  )
}

export default Promix155Page
