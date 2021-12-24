import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import Events from './components/Events/Events';

const theme = createTheme({
  typography: {
    fontFamily: [
      'DM sans',
      'Poppins',
    ].join(','),
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Events />
      </div>
    </ThemeProvider>
  );
}

export default App;
