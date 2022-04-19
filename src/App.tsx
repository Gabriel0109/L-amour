import { useState } from 'react'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { ProductAccordion } from './components/ProductsAccordion'
import { CommentsCarousel } from './components/CommentsCarousel'
import {Soon } from './components/Soon'
import { Container, GlobalStyle } from './styles/global'
function App(): JSX.Element {
  return (
    <>
      <Container>
        {/* <Header />
        <Banner />
        <About />
        <ProductAccordion/>
        <CommentsCarousel /> */}
        <Soon/>
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
