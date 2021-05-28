import React from 'react'
import ReactDOM from 'react-dom'

import { ModalProvider } from 'styled-react-modal'
import { Modal } from 'styles'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider backgroundComponent={Modal}>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
