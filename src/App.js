import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar.js'
import './App.css';
import theme from './theme';
import GlobalStyles from './globalStyles';
import Headerv2 from './components/headerv2'
import Aboutv2 from './components/aboutv2'
import Projects from './components/projects'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <GlobalStyles/>
      <Navbar/>
      <Headerv2/>
      <Aboutv2/>
      <Projects/>
    </ThemeProvider>
  );
}

export default App;
