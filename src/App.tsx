import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Papsnap from "./components/projects/Papsnap";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        
        <Route path="projects">
          <Route path="papsnap" element={<Papsnap />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
