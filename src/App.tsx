import { useState } from 'react'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Container, GlobalStyle } from './styles/global'
function App(): JSX.Element {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <About />
        {/* <ProductsCarousel /> */}
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
