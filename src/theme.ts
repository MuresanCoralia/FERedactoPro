import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F5EFE6', // fundal general
      paper: '#B8A89F', // background fields
    },
    primary: {
      main: '#C49A6C', // butoane
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#5C4033', // text principal
      secondary: '#FAF7F3', // text in fields
    },
    success: {
      main: '#7A8B75', // important things
    },
  },
  typography: {
    fontFamily: `'Merriweather', serif`,
  },
});

export default theme;
