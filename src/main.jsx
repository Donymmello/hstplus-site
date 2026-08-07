import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { installGlobalErrorHandlers } from './lib/globalerrorhandlers.js'

installGlobalErrorHandlers()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
)

// Chegar aqui significa que o bundle carregou e o React montou com sucesso
// — liberta a flag do lib/globalErrorHandlers.js, para um chunk error
// genuíno num deploy futuro poder voltar a disparar um reload automático.
sessionStorage.removeItem('hstReloadedForChunkError')