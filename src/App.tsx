import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />

      <Container
        component="main"
        maxWidth={false}
        disableGutters
        sx={{ px: { xs: '5%', md: '20%' } }}
      >
        <Home />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </Container>
    </>
  );
}

export default App;
