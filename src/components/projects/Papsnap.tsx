import Skill from "./Skill";

function Papsnap() {
  return (
    <div className="max-w-5xl mx-auto mt-20 space-y-12">
      
      {/* Title and Link */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            src={`${import.meta.env.BASE_URL}/papsnap-logo.png`}
            alt="Papsnap logo"
            className="h-16"
          />
          <h1 className="text-4xl font-bold">PapSnap</h1>
        </div>
        <a
          href="https://papsnap.com"
          target="none"
          className="bg-linear-to-r from-blue-600 to-purple-600 rounded-full px-6 py-3 text-xl text-white font-medium"
        >
          Visit Site ›
        </a>
      </div>


      {/* Summary */}
      <div className="text-lg">
        A Progessive Web App for capturing photos and videos at events and
        sharing them with other guests seamlessly.
      </div>

      {/* Details */}
      <div className="mt-4 flex gap-16">
        <div>
          <h6 className="text-sm font-medium uppercase text-gray-500">
            Role
          </h6>
          <p className="mt-2 text-lg">Full Stack Developer</p>
        </div>
        <div>
          <h6 className="text-sm font-medium uppercase text-gray-500">
            Dates
          </h6>
          <p className="mt-2 text-lg">May 2026 - Ongoing</p>
        </div>
      </div>

      <hr/>

      {/* Project Overview */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <h3 className="min-w-xs">Project Overview</h3>
        <div className="space-y-4 text-justify">
          <p>
            Papsnap is a web application where users create and share events
            and guests can use the app to take photos and videos, which are
            seamlessly shared with the event organiser. It's a ready to use
            solution for sharing media from event guests to the host.{" "}
          </p>
          <p>
            Hosts can setup their events on the dashboard, configure it with
            how many guests will attend and if they like, set it up as a
            competition with a prize for best photo. Joining an event is
            easily done with a QR code and once inside the event, guests
            photos are seamlessly shared with the host. Papsnap handles all
            the data storage, access control and photo and video capture and
            provides a seamless user experience without any technical
            hurdles.
          </p>
        </div>
      </div>

      <hr/>

      {/* My Role */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <h3 className="min-w-xs">My Role</h3>
        <div className="space-y-4 text-justify">
          <p>
            I came onboard the project part way through the development of
            the MVP and was responsible for getting it production ready and
            released. The application uses a backend HTTP Server written in
            Go, with a React frontend built using Vite and is deployed on
            AWS using Terraform. I was a full-stack developer and worked
            across all the technology layers; implementing features, working
            with the API, creating tests and deploying and maintaining the
            live product.
          </p>
          <p>
            In a couple of months Papsnap has passed user acceptance
            testing, and I rolled it out to production where it's currently
            being used in events across Sydney. I'm continuing to work with
            the product owner and planning the next major release with
            exciting new features and integration with Canva. So stay tuned!
          </p>
        </div>
      </div>
      
      <hr/>

      {/* Skills */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <h3 className="min-w-xs">Skills</h3>
        <div className="space-y-6">
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
            <div className="flex gap-8">
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
        </div>
      </div>

      <hr/>

      {/* Gallery */}
      <div className="mt-8 flex gap-4">
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
      </div>
    </div>
  );
}

export default Papsnap;
