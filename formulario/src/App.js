import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home' 
import Cadastro from './components/pages/Cadastro' 
import Lista from './components/pages/Lista'

import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/lista" element={<Lista />} />
        </Routes>
      </Container>
      <Footer />
      </Router>
  );
}

export default App;
