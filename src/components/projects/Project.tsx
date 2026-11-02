import type { ReactNode } from "react";

type ProjectProps = {
  title: ReactNode;
  logo: ReactNode;
  link: ReactNode;
  summary: ReactNode;
  role: ReactNode;
  dates: ReactNode;
  overview: ReactNode;
  myRole: ReactNode;
  skills: ReactNode;
  gallery?: ReactNode;
};

function Project({
  title,
  logo,
  link,
  summary,
  role,
  dates,
  overview,
  myRole,
  skills,
  gallery,
}: ProjectProps) {
  return (
    <div className="max-w-5xl mx-auto mt-20 space-y-12">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          {logo}
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
        {link}
      </div>

      <div className="text-lg">{summary}</div>

      <div className="mt-4 flex gap-16">
        <div>
          <h6 className="text-sm font-medium uppercase text-gray-500">Role</h6>
          <p className="mt-2 text-lg">{role}</p>
        </div>
        <div>
          <h6 className="text-sm font-medium uppercase text-gray-500">Dates</h6>
          <p className="mt-2 text-lg">{dates}</p>
        </div>
      </div>

      <hr />

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <h3 className="min-w-xs">Project Overview</h3>
        <div className="space-y-4 text-justify">{overview}</div>
      </div>

      <hr />

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <h3 className="min-w-xs">My Role</h3>
        <div className="space-y-4 text-justify">{myRole}</div>
      </div>

      <hr />

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <h3 className="min-w-xs">Skills</h3>
        <div className="space-y-6">{skills}</div>
      </div>

      {gallery && (
        <>
          <hr />
          <div className="mt-8 flex gap-4">{gallery}</div>
        </>
      )}
    </div>
  );
}

export default Project;
