import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router";
import Skills from './pages/Skills';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';
import Cv from './pages/Cv';
import { Navigate } from 'react-router-dom';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        {/*<Row id="spacer"> </Row>*/}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;

