import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-au'
// import Eot from './Eot.tsx';
import Ppp from './Ppp.tsx';
import newTheme from './DatePickerThemeOverride.tsx';
import { ThemeProvider } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
    <ThemeProvider theme={newTheme}>
      <StrictMode>
        <Ppp />
      </StrictMode>
    </ThemeProvider>
  </LocalizationProvider>
)
