import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import { Provider } from 'react-redux'
import { store } from './config/store'
import Login from './pages/Login'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Login />
    </Provider>
  </StrictMode>
)
