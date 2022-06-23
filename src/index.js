import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Screens
import App from './screens/App'
import FAQ from './screens/FAQ'
import Empty from './screens/Empty'
import Page404 from './screens/Page404'

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', montserrat`,
    body: `'Montserrat', montserrat`,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/react-app' element={<App />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/prikol' element={<Empty />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
