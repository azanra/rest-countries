export function SelectRegion() {
  const regionList = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div>
      <select name="" id="">
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
