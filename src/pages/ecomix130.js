import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Vistas } from '../components/Vistas'
import { Ecomix130 } from '../components/models/Ecomix130'
import { Styled } from '../styles/vistas.styles'

const Ecomix130Page = () => {
  return (
    <Layout>
      <SEO />
      <Vistas title="Ecomix 130">
        <Ecomix130 />
      </Vistas>
    </Layout>
  )
}

export default Ecomix130Page
