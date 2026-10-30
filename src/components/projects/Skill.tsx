function Skill({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={`${import.meta.env.BASE_URL}/skills/${image}`}
        className="h-6"
      />
      <p>{name}</p>
    </div>
  );
}
export default Skill;
