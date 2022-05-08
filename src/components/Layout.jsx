import React from 'react'
import { Navbar } from './Navbar'
import { GlobalStyle } from '../styles/globalstyles'
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navbar />
    <StyledLayout>{children}</StyledLayout>
  </ThemeProvider>
)

export default Layout

const StyledLayout = styled.div`
  max-width: 1390px;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacingL};

  @media only screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacingL} 35px;
  }
`
