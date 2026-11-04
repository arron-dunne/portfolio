import { Link } from "react-router";

function Navbar() {
  return <div className="w-full p-4 bg-white flex justify-between">
    <div className="flex items-center gap-4">
      <img className="size-12" src={`${import.meta.env.BASE_URL}/3d.png`} />
      <Link to="/">Portfolio</Link>
    </div>
    <div className="flex gap-6">
      <Link to="/career">Career</Link>
      <Link to="/projects/papsnap">
        <h4>Projects</h4>
      </Link>
      <h4>Skills</h4>
      <h4>Get in touch</h4>
    </div>
  </div>;
}
export default Navbar;
