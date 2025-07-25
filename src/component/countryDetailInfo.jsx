export function CountryDetailInfo({ title, text }) {
  return (
    <div className="flex gap-2 mb-2">
      <h2 className="font-semibold">{title}</h2>
      <span>{text}</span>
    </div>
  );
}
