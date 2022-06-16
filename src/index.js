import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// Screens
import App from './screens/App'

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
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
