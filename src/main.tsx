import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createServer } from 'miragejs';


createServer({
  routes() {
    this.namespace = 'api'

    this.get('/products', () => {
      return [
        {
          name: 'Cesta Soft',
          description: 'Cesta ideal para 1 pessoa',
        },
        {
          name: 'Cesta Premium',
          description: 'Cesta ideal para 2 pessoas',
        },
        {
          name: 'Cesta Unique',
          description: 'Cesta ideal para 1 pessoa',
        },
        {
          name: 'Cesta Tradicional',
          description: 'Cesta ideal para 3 pessoas',
        }
      ]
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
