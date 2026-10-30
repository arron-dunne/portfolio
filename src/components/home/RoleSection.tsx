export interface RoleProps {
  title: string;
  description: string;
  image: string;
}


function RoleSection({
  role: { title, description, image },
  index,
}: {
  role: RoleProps;
  index: number;
}) {
  return (
    <div
      className={`flex ${index % 2 == 0 ? "flex-row bg-gray-100" : "flex-row-reverse bg-white"}`}
    >
      <div className="w-2/5 shrink-0 h-120 overflow-hidden bg-red-100">
        <img className="relative w-full" src={`${import.meta.env.BASE_URL}/${image}`} />
      </div>
      <div className="p-12">
        <h1 className="mb-8">{title} </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default RoleSection;
