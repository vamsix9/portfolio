import { useEffect, useState } from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Loading from "./components/Loader";
import { Container } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />

      <Container
        component="main"
        maxWidth={false}
        disableGutters
        sx={{
          px: { xs: "5%", md: "20%" },
          pt: { xs: "100px", md: "120px" }, // ✅ space for navbar
        }}
      >
        <Home />
        <Experience />
        <Skills />
        <Contact />
      </Container>
    </>
  );
}

export default App;
