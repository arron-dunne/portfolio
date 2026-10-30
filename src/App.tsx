import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Papsnap from "./components/projects/Papsnap";
import Cibolibro from "./components/projects/Cibolibro";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        
        <Route path="projects">
          <Route path="papsnap" element={<Papsnap />} />
          <Route path="cibolibro" element={<Cibolibro />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
