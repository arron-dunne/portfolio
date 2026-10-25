function HeroSection() {
  
  return (
    <div className="relative flex-1 flex flex-col gap-16 justify-center items-center">
      <h1>Arron Dunne</h1>
      <div className="flex gap-12">
        <h3 className="font-ibm">Software Engineer</h3>
        <h3>Full-Stack Developer</h3>
        <h3>Safety Critical Engineer</h3>
        <h3>Web Designer</h3>
        <h3>AI Developer</h3>
      </div>
      <div className="flex gap-24">
        <div className="flex gap-4 items-center">
          <img className="size-8" src="github-icon.png" />
          <span>Github</span>
        </div>
        <div className="flex gap-4 items-center">
          <img className="size-8" src="linkedin-icon.png" />
          <span>LinkedIn</span>
        </div>
        <div className="flex gap-4 items-center">
          <img className="size-8" src="cv-icon.png" />
          <span>CV</span>
        </div>
      </div>
      <div className="absolute bottom-8 text-2xl">
        ↓
      </div>
    </div>
  );
}
export default HeroSection
