export function SelectRegion({ setRegion }) {
  const regionList = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) => setRegion(e.target.value.toLowerCase())}
      >
        <option value="">Filter by Region</option>
        {regionList.map((item, index) => {
          return (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
