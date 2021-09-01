import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar.js'
import './App.css';
import theme from './theme';
import GlobalStyles from './globalStyles';
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <GlobalStyles/>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
    </ThemeProvider>
  );
}

export default App;
