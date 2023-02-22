import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/app.scss';
import './styles/_stylesGuide.scss';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <App/>
    </StyledEngineProvider>
  </React.StrictMode>,
)
