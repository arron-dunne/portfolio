import CareerEntry from "./CareerEntry";

function Career() {
  return (
    <div className="p-4 space-y-8">
      <CareerEntry
        title="Software Engineer Contractor"
        location="Sole Trader, Sydney"
        dates="May 2026 - Present"
        description="Started my own business providing custom software solutions to clients in Sydney. I've developed and launched a progessive web-app Papsnap which captures photos and videos from users and shares them amonst guest at events. Additionally provided website design and buildign services to a medical institute to deliver a major update to their website."
      />
      <CareerEntry 
        title="Founding Software Engineer"
        location="Fidestra AI, Sydney"
        dates="Jan 2026 - Present"
        description="Leading devlopment of a deepfake detection platform within a Sydney-based startup. Working with cofounders to engage with investors and industry experts to find product-market fit and unlock future growth. The product is a full-stack web application with scope to grow into a API based platform for detecting, analysing and reporting online content where AI-generation is used in a harmful way."
      />
      <CareerEntry
        title="Software Engineer"
        location="Capgemini Engineering, Bath, UK"
        dates="2020 - 2024"
        description="Developed safety-critical software solutions for transportation and security applications. Gained experience across every phase of the Software Develpment Lifecycle and produced specifications, embedded code, automated test suites and complete documentation. Specific projects include seL4, NATS, Thales, Airbus and HICLASS."
      />
      {/* University */}
      <CareerEntry
        title="Master's Degree in Aerospace Engineering"
        location="University of Bath"
        dates="2014 - 2019"
        description="Studied engineering solutions from first principles through design,
          development and testing through to delivery. Learn applied mathematics
          and physics to problem solving in Aeorspace domains including
          aerodynamics, orbital mechanics, structural analysis and computational
          modelling. For my disseration I was part of Team Bath Drones team."
      />
    </div>
  );
}

export default Career;
