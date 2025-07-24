export function CountryDetailInfo({ title, text }) {
  return (
    <div className="flex gap-4 mb-2">
      <h2 className="font-bold">{title}</h2>
      <span>{text}</span>
    </div>
  );
}
