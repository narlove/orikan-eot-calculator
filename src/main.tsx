import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-au'
import Eot from './Eot.tsx';
import Ppp from './Ppp.tsx';
import Navbar from './Navbar.tsx';
import { BrowserRouter, Route, Routes } from "react-router";
import newTheme from './DatePickerThemeOverride.tsx';
import { ThemeProvider } from '@mui/material';
import TempHomepage from './TempHomepage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
      <ThemeProvider theme={newTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<TempHomepage />} />
              <Route path="/eot" element={<Eot />} />
              <Route path="/ppp" element={<Ppp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  </StrictMode>
)
