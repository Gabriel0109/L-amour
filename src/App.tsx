import { useState } from 'react'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { ProductsCarousel } from './components/Products'
import { Header } from './components/Header'
import { Container, GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <About />
        <ProductsCarousel />
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
