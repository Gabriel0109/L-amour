import { useState } from 'react'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Container, GlobalStyle } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
    <Header/>
    <Banner />
    </Container>
  
    <GlobalStyle/>
    </>
  )
}

export default App
