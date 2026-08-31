import { createTheme } from '@mui/material/styles'
import '@mui/x-date-pickers/themeAugmentation'

const newTheme = createTheme({
  palette: {
    primary: {
      main: '#1769aa',
    },
    text: {
      primary: '#1d2939',
      secondary: '#66758a',
    },
    background: {
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Avenir Next", "Segoe UI", sans-serif',
    fontSize: 14,
  },
  shape: {
    borderRadius: 9,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          '& .MuiInputBase-root': {
            minHeight: 42,
            borderRadius: 9,
            fontSize: 14,
            color: '#1d2939',
            backgroundColor: '#ffffff',
          },
          '& .MuiInputBase-input': {
            height: 42,
            padding: '0 13px',
            fontSize: 14,
          },
          '& .MuiInputLabel-root': {
            fontSize: 14,
            color: '#66758a',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#cbd5e1',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#8a98a9',
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0066cc',
            borderWidth: 1,
            boxShadow: '0 0 4px rgba(0, 102, 204, 0.3)',
          },
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          color: '#132238',
        },
        label: {
          fontSize: 14,
          fontWeight: 650,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #dce4ed',
          borderRadius: 12,
          boxShadow: '0 18px 48px rgba(31, 52, 73, 0.09)',
        },
      },
    },
  },
});

export default newTheme;