export function CountryList({ country }) {
  const { name, flag, population, region, capital } = country;
  const listCapital = capital.join();
  return (
    <div>
      <div>
        <img
          src={flag}
          alt={`${name} Flag`}
          style={{ height: "75px", width: "150px" }}
        />
      </div>
      <h1>{name}</h1>
      <div>
        <h2>Population: </h2>
        <span>{population}</span>
      </div>
      <div>
        <h2>Region: </h2>
        <span>{region}</span>
      </div>
      <div>
        <h2>Capital: </h2>
        <span>{listCapital}</span>
      </div>
    </div>
  );
}
