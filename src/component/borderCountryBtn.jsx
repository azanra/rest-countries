import { useCodeCountry } from "../hooks/useCodeCountry.jsx";

export default function BorderCountryBtn({ borderCountry, setCountryDetail }) {
  const { country, loading, error } = useCodeCountry(borderCountry);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <button onClick={() => setCountryDetail(country)}>
      {country.name.common}
    </button>
  );
}
