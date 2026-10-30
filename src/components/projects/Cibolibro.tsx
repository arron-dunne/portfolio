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
    name: "Infrastructure",
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

function Cibolibro() {
  return (
    <main className="bg-[#f8f7f4] text-[#292823] selection:bg-[#ecd5c9] selection:text-[#292823]">
      <article className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28 lg:px-12">
        <header>
          <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-[#79766e] uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-[#b35d42]" />
            Project case study
          </p>

          <div className="mt-7 flex flex-col items-start justify-between gap-8 sm:mt-9 lg:flex-row lg:items-center lg:gap-12">
            <h1 className="text-[clamp(3.25rem,10vw,7.5rem)] leading-[1.05] font-medium tracking-[-0.065em]">
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

          <dl className="mt-12 grid gap-7 border-t border-[#dedbd3] pt-7 sm:mt-16 sm:grid-cols-[1.2fr_1fr] sm:gap-10 lg:max-w-xl">
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

        <div className="mt-16 border-t border-[#dedbd3] sm:mt-20">
          <section
            aria-labelledby="cibolibro-overview"
            className="grid gap-5 border-b border-[#dedbd3] py-9 sm:grid-cols-[1fr_2fr] sm:gap-10 sm:py-12 lg:grid-cols-[1fr_2.2fr]"
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
            className="grid gap-5 py-9 sm:grid-cols-[1fr_2fr] sm:gap-10 sm:py-12 lg:grid-cols-[1fr_2.2fr]"
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
        </div>

        <section
          aria-labelledby="cibolibro-skills"
          className="mt-7 rounded-3xl border border-[#e4e1d9] bg-white/75 px-5 py-7 sm:mt-10 sm:px-9 sm:py-9 lg:px-10"
        >
          <div className="flex flex-col justify-between gap-3 pb-7 sm:flex-row sm:items-end sm:pb-9">
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] text-[#9c4b32] uppercase">
                Tools & technologies
              </p>
              <h2
                id="cibolibro-skills"
                className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-4xl"
              >
                Skills
              </h2>
            </div>
            <p className="text-sm leading-6 text-[#79766e]">
              The stack behind the project.
            </p>
          </div>

          <div className="divide-y divide-[#ebe8e1] border-t border-[#e4e1d9]">
            {skillGroups.map((group) => (
              <div
                key={group.name}
                className="grid gap-4 py-6 last:pb-0 sm:grid-cols-[1fr_2fr] sm:items-center sm:gap-8 sm:py-7 lg:grid-cols-[1fr_2.2fr]"
              >
                <h3 className="text-xs font-medium tracking-wide text-[#79766e]">
                  {group.name}
                </h3>
                <ul className="grid grid-cols-1 gap-x-3 gap-y-4 min-[360px]:grid-cols-2 lg:grid-cols-3 lg:gap-x-5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex min-w-0 items-center gap-2.5 sm:gap-3"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#eeece7] bg-white sm:size-11">
                        <img
                          src={`${import.meta.env.BASE_URL}skills/${skill.image}`}
                          alt=""
                          loading="lazy"
                          width={28}
                          height={28}
                          className="size-7 object-contain"
                        />
                      </span>
                      <span className="text-xs font-medium sm:text-sm">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

export default Cibolibro;
