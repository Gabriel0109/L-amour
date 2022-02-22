import { useState } from 'react'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <GlobalStyle/>
    </>
  )
}

export default App
