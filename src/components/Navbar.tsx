import { Link } from "react-router";

function Navbar() {
  return <div className="w-full p-4 bg-white flex justify-between">
    <Link to="/">
      <h4>Portfolio</h4>  
    </Link>
    <div className="flex gap-6">
      <h4>Experience</h4>
      <Link to="/projects/papsnap">
        <h4>Projects</h4>
      </Link>
      <h4>Skills</h4>
      <h4>Get in touch</h4>
    </div>
  </div>;
}
export default Navbar;
