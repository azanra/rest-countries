export function CountryList({ country }) {
  const { name, flags, population, region, capital } = country;
  const listCapital = capital.join();
  const formattedPopulation = population.toLocaleString();
  return (
    <div>
      <div>
        <img
          src={flags.png}
          alt={`${name} Flag`}
          style={{ height: "75px", width: "150px" }}
        />
      </div>
      <h1>{name.common}</h1>
      <div>
        <h2>Population: </h2>
        <span>{formattedPopulation}</span>
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
