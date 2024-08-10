import './App.css'
import TypingText from './components/TypingText'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import Background from './components/Background';
// import DarkProvider, {useDark} from './components/ThemeProvider';


function App() {
  const text = "const NewComponent = (p : Props) => {\n\treturn (\n\t\t<Something />\n\t);\n}";


  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<Background>x</Background>} />
        </Routes>
        </ThemeProvider>
    </Router>
  )
}

export default App
