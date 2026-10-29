function Papsnap() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            src={`${import.meta.env.BASE_URL}/papsnap-logo.png`}
            alt="Papsnap logo"
            className="h-20"
          />
          <h1 className="text-5xl font-bold">PapSnap</h1>
        </div>

        <a href="https://papsnap.com" className="bg-slate-300 rounded-full px-8 py-4 text-xl">
          Visit Site
        </a>
      </div>

      <div>
        Role: Full Stack Developer
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <h3 className="min-w-xs">Project Overview</h3>
        <div className="space-y-4 text-justify">
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
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <h3 className="min-w-xs">My Role</h3>
        <div className="space-y-4 text-justify">
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
        </div>
      </div>
    </div>
  );
}

export default Papsnap;
