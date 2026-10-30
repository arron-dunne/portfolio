const skillGroups = [
  {
    name: "Frontend",
    skills: [
      { name: "React", image: "react-logo.png" },
      { name: "JavaScript", image: "javascript-logo.png" },
      { name: "Vite", image: "vite-logo.png" },
    ],
  },
  {
    name: "Backend & Data",
    skills: [
      { name: "Go", image: "go-logo.png" },
      { name: "PostgreSQL", image: "postgres-logo.png" },
    ],
  },
  {
    name: "Cloud & Deploy",
    skills: [
      { name: "AWS", image: "aws-logo.png" },
      { name: "Terraform", image: "terraform-logo.png" },
    ],
  },
  {
    name: "Version Control",
    skills: [
      { name: "Git", image: "git-logo.png" },
      { name: "GitHub", image: "github-logo.png" },
    ],
  },
  {
    name: "AI Tools",
    skills: [
      { name: "ChatGPT", image: "chatgpt-logo.png" },
      { name: "Claude", image: "claude-logo.png" },
    ],
  },
];

const assetBase = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/`;

function Cibolibro() {
  return (
    <main className="bg-[#f8f7f4] text-[#292823] selection:bg-[#ecd5c9] selection:text-[#292823]">
      <article className="mx-auto max-w-6xl px-6 pt-10 pb-20 sm:px-10 sm:pt-12 sm:pb-24 lg:px-12">
        <header>
          <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-[#79766e] uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-[#b35d42]" />
            Project case study
          </p>

          <div className="mt-5 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-10">
            <h1 className="text-[clamp(3rem,7vw,5rem)] leading-[1.05] font-medium tracking-[-0.065em]">
              CiboLibro<span className="text-[#b35d42]">.</span>
            </h1>

            <button
              type="button"
              className="group inline-flex min-h-14 shrink-0 cursor-pointer items-center justify-center gap-8 rounded-full bg-[#a64f35] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#883f2a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a64f35]"
            >
              Visit Site
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-5 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              >
                <path d="M6 18 18 6M6 6h12v12" />
              </svg>
            </button>
          </div>

          <dl className="mt-8 grid gap-6 sm:mt-9 sm:grid-cols-[1.2fr_1fr] sm:gap-10 lg:max-w-xl">
            <div>
              <dt className="text-[11px] font-medium tracking-[0.16em] text-[#79766e] uppercase">
                Role
              </dt>
              <dd className="mt-2 text-base font-medium sm:text-lg">
                Full-Stack Developer
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium tracking-[0.16em] text-[#79766e] uppercase">
                Timeline
              </dt>
              <dd className="mt-2 flex items-center gap-3 text-base font-medium sm:text-lg">
                2024 - Ongoing
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-[#a64f35]"
                />
              </dd>
            </div>
          </dl>
        </header>

        <div className="mt-9 grid items-start gap-12 border-t border-[#dedbd3] pt-8 sm:mt-10 sm:pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
          <div className="min-w-0">
            <section
              aria-labelledby="cibolibro-overview"
              className="space-y-4 border-b border-[#dedbd3] pb-8"
            >
              <h2
                id="cibolibro-overview"
                className="text-lg font-medium tracking-tight"
              >
                Project Overview
              </h2>
              <p className="max-w-prose text-base leading-8 text-[#6d6961] sm:text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </section>

            <section
              aria-labelledby="cibolibro-role"
              className="space-y-4 border-b border-[#dedbd3] py-8"
            >
              <h2
                id="cibolibro-role"
                className="text-lg font-medium tracking-tight"
              >
                My Role
              </h2>
              <p className="max-w-prose text-base leading-8 text-[#6d6961] sm:text-[17px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet. Donec
                ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras
                mattis consectetur purus sit amet fermentum, maecenas faucibus
                mollis interdum.
              </p>
            </section>

            <section aria-labelledby="cibolibro-skills" className="pt-8">
              <h2
                id="cibolibro-skills"
                className="text-lg font-medium tracking-tight"
              >
                Skills
              </h2>
              <div className="mt-5 divide-y divide-[#e8e5de]">
                {skillGroups.map((group) => (
                  <div
                    key={group.name}
                    className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-baseline sm:gap-5"
                  >
                    <h3 className="text-xs font-normal leading-5 text-[#79766e]">
                      {group.name}
                    </h3>
                    <ul className="flex flex-wrap gap-x-5 gap-y-3">
                      {group.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center gap-2 text-sm leading-5 text-[#59564f]"
                        >
                          <img
                            src={`${assetBase}skills/${skill.image}`}
                            alt=""
                            loading="lazy"
                            width={18}
                            height={18}
                            className="size-[18px] shrink-0 object-contain"
                          />
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section
            aria-labelledby="cibolibro-gallery"
            className="min-w-0 border-t border-[#dedbd3] pt-8 lg:border-t-0 lg:pt-0"
          >
            <h2
              id="cibolibro-gallery"
              className="text-[11px] font-medium leading-7 tracking-[0.16em] text-[#79766e] uppercase"
            >
              Project gallery
            </h2>

            <div className="mt-4 space-y-7">
              {["01", "02", "03"].map((number, index) => (
                <figure key={number}>
                  <div className="flex aspect-[16/11] items-center overflow-hidden rounded-xl border border-[#e2ddd4] bg-[#ece8e0] p-4 sm:p-5">
                    <img
                      src={`${assetBase}papsnap-screenshot.png`}
                      alt={`PapSnap homepage, used as CiboLibro gallery placeholder ${number}.`}
                      loading={index === 0 ? "eager" : "lazy"}
                      width={2443}
                      height={1441}
                      className="block h-auto w-full rounded-md border border-black/5 shadow-[0_6px_24px_-10px_rgba(41,40,35,0.18)]"
                    />
                  </div>
                  <figcaption className="mt-3 flex justify-between gap-4 text-[11px] leading-5 text-[#79766e]">
                    <span className="font-mono">{number}</span>
                    <span>Placeholder screen</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default Cibolibro;
