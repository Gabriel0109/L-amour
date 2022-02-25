import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/items', () => {
      return [
        {
          name: 'Cesta Soft',
          description: 'Cesta ideal para 1 pessoa',
          src_url: './assets/img/bread.jpg'
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
