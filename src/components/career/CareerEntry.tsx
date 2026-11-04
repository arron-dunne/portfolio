function CareerEntry({
  title,
  location,
  dates,
  description,
}: {
  title: string;
  location: string;
  dates: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl p-4 rounded-lg border border-slate-200">
      <h3>{title}</h3>
      <div className="mt-2 flex justify-between">
        <p>{location}</p>
        <p>{dates}</p>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  );
}
export default CareerEntry;
