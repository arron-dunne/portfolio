import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RoleSection, { type RoleProps } from "./components/home/RoleSection";

const rolesInfo: RoleProps[] = [
  {
    title: "Software Engineer",
    description:
      "Over 6 years of experience building and delivering software. Studied every stage of the Software Development Lifecycle and put it into practise across a wide range of industries. Certified Software Engineer.",
    image: "circuit-board.png",
  },
  {
    title: "Full Stack Developer",
    description:
      "Designed, built and shipped full-stack web applications with a wide range of the most powerful tools and frameworks including React, Next.js, Postgres, AWS and more.",
    image: "code.png",
  },
  {
    title: "Safety Critical Engineer",
    description:
      "Designed, built and shipped full-stack web applications with a wide range of the most powerful tools and frameworks including React, Next.js, Postgres, AWS and more.",
    image: "plane.png",
  },
  {
    title: "Web Designer",
    description:
      "Designed, built and shipped full-stack web applications with a wide range of the most powerful tools and frameworks including React, Next.js, Postgres, AWS and more.",
    image: "design.png",
  },
  {
    title: "AI Developer",
    description:
      "Designed, built and shipped full-stack web applications with a wide range of the most powerful tools and frameworks including React, Next.js, Postgres, AWS and more.",
    image: "network.png",
  },
];

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <HeroSection />
      </div>
      {rolesInfo.map((role, index) => (
        <RoleSection role={role} index={index} />
      ))}
      <Footer/>
    </>
  );
}
export default App;
