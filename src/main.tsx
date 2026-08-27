import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-au'
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
    <StrictMode>
      <App />
    </StrictMode>
  </LocalizationProvider>
)
