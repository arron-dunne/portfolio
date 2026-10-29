function Navbar() {
  return <div className="w-full p-4 bg-white flex justify-between">
    <a href="/">
      <h4>Portfolio</h4>
    </a>
    <div className="flex gap-6">
      <h4>Experience</h4>
      <h4>Projects</h4>
      <h4>Skills</h4>
      <h4>Get in touch</h4>
    </div>
  </div>;
}
export default Navbar;
