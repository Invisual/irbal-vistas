import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { LC130 } from '../components/models/LC130'

const LC130Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="LC 130">
        <LC130 />
      </Vistas>
    </Layout>
  )
}

export default LC130Page
