import Project from "./Project";
import Skill from "./Skill";

function Papsnap() {
  return (
    <Project
      title="PapSnap"
      logo={
        <img
          src={`${import.meta.env.BASE_URL}/papsnap-logo.png`}
          alt="Papsnap logo"
          className="h-16"
        />
      }
      link={
        <a
          href="https://papsnap.com"
          target="none"
          className="bg-linear-to-r from-blue-600 to-purple-600 rounded-full px-6 py-3 text-xl text-white font-medium"
        >
          Visit Site ›
        </a>
      }
      summary={
        <>
          A Progessive Web App for capturing photos and videos at events and
          sharing them with other guests seamlessly.
        </>
      }
      role="Full Stack Developer"
      dates="May 2026 - Ongoing"
      overview={
        <>
          <p>
            Papsnap is a web application where users create and share events and
            guests can use the app to take photos and videos, which are
            seamlessly shared with the event organiser. It's a ready to use
            solution for sharing media from event guests to the host.{" "}
          </p>
          <p>
            Hosts can setup their events on the dashboard, configure it with how
            many guests will attend and if they like, set it up as a competition
            with a prize for best photo. Joining an event is easily done with a
            QR code and once inside the event, guests photos are seamlessly
            shared with the host. Papsnap handles all the data storage, access
            control and photo and video capture and provides a seamless user
            experience without any technical hurdles.
          </p>
        </>
      }
      myRole={
        <>
          <p>
            I came onboard the project part way through the development of the
            MVP and was responsible for getting it production ready and
            released. The application uses a backend HTTP Server written in Go,
            with a React frontend built using Vite and is deployed on AWS using
            Terraform. I was a full-stack developer and worked across all the
            technology layers; implementing features, working with the API,
            creating tests and deploying and maintaining the live product.
          </p>
          <p>
            In a couple of months Papsnap has passed user acceptance testing,
            and I rolled it out to production where it's currently being used in
            events across Sydney. I'm continuing to work with the product owner
            and planning the next major release with exciting new features and
            integration with Canva. So stay tuned!
          </p>
        </>
      }
      skills={
        <>
          {/* Frontend */}
          <div className="flex items-center">
            <p className="w-28">Frontend</p>
            <div className="flex gap-8">
              <Skill name="React" image="react-logo.png" />
              <Skill name="Vite" image="vite-logo.png" />
              <Skill name="JavaScript" image="javascript-logo.png" />
            </div>
          </div>

          {/* Backend */}
          <div className="flex items-center">
            <p className="w-28">Backend</p>
            <div className="flex gap-8">
              <Skill name="Go" image="go-logo.png" />
            </div>
          </div>

          {/* Data */}
          <div className="flex items-center">
            <p className="w-28">Data</p>
            <div className="flex gap-8">
              <Skill name="Postgres" image="postgres-logo.png" />
            </div>
          </div>

          {/* Deployment */}
          <div className="flex items-center">
            <p className="w-28">Deployment</p>
            <div className="flex gap-8">
              <Skill name="Terraform" image="terraform-logo.png" />
              <Skill name="AWS" image="aws-logo.png" />
            </div>
          </div>

          {/* Version Control */}
          <div className="flex items-center">
            <p className="w-32">Version Control</p>
            <div className="flex items-center gap-4">
              <Skill name="Git" image="git-logo.png" />
              <div className="size-2 bg-slate-200 rounded-full" />
              <Skill name="Github" image="github-logo.png" />
            </div>
          </div>

          {/* AI */}
          <div className="flex items-center">
            <p className="w-28">AI</p>
            <div className="flex gap-8">
              <Skill name="Claude" image="claude-logo.png" />
            </div>
          </div>
        </>
      }
      gallery={
        <>
          <img
            src={`${import.meta.env.BASE_URL}/papsnap-screenshot.png`}
            className="w-32 rounded-2xl border border-gray-200 shadow-xl"
          />
          <div className="p-0.5 rounded-4xl bg-linear-to-br from-blue-600 to-purple-600">
            <img
              src={`${import.meta.env.BASE_URL}/papsnap-screenshot.png`}
              className="rounded-4xl"
            />
          </div>
          <div className="p-0.5 rounded-4xl bg-linear-to-br from-blue-600 to-purple-600">
            <img
              src={`${import.meta.env.BASE_URL}/papsnap-screenshot.png`}
              className="rounded-4xl"
            />
          </div>
        </>
      }
    />
  );
}

export default Papsnap;
