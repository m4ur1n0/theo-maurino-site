import './App.css'
import TypingText from './components/TypingText'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import Background from './components/Background';
import EnterAnimation from './components/EnterAnimation';
import { useState , useEffect} from 'react';
// import DarkProvider, {useDark} from './components/ThemeProvider';


function App() {
  // const text = "const NewComponent = (p : Props) => {\n\treturn (\n\t\t<Something />\n\t);\n}";

  // const [visitedBefore, setVisitedBefore] = useState(true);
  //   useEffect(() => {
  //       const visited = localStorage.getItem("hasVisitedBefore");

  //       if (!visited) {
  //           setVisitedBefore(false);
  //           localStorage.setItem("hasVisitedBefore", "true");
  //       }
  //   }, []);


  return (
    <Router>
      <ThemeProvider>
        <Background>
          <Routes>
            <Route path='/' element={<>
              
              {/* {visitedBefore && <EnterAnimation />} */}
            </>} />
          </Routes>
        </Background>
      </ThemeProvider>
    </Router>
  )
}

export default App
