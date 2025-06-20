import { getBorderCountry, useCodeCountry } from "../hooks/useCodeCountry.jsx";
import { CountryDetailInfo } from "./countryDetailInfo.jsx";

export function CountryDetail({ country }) {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = country;

  let currenciesList = [];

  const getCurrencyList = (currencyInput) => {
    for (const key in currencyInput) {
      currenciesList.push(currencyInput[key].name);
    }
  };

  getCurrencyList(currencies);

  const nativeNameList = Object.keys(name.nativeName);
  const nativeNameCommon = nativeNameList.map((item) => {
    return name.nativeName[item].common;
  });

  const borderCountry = getBorderCountry(borders);
  console.log(borders);
  console.log(borderCountry);

  return (
    <div>
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            height={15}
            width={15}
          >
            <path
              d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
              data-name="4-Arrow Left"
            />
          </svg>
          <button>Back</button>
        </div>
      </div>
      <div>
        <div>
          <img src={flags.png} alt={`${name} Flag`} />
        </div>
        <div>
          <div>
            <h2>{name.common}</h2>
          </div>
          <div>
            <div>
              <div className="left">
                <CountryDetailInfo
                  title="Native Name: "
                  text={nativeNameCommon.join()}
                />
                <CountryDetailInfo
                  title="Population: "
                  text={population.toLocaleString()}
                />
                <CountryDetailInfo title="Region: " text={region} />
                <CountryDetailInfo title="Sub Region: " text={subregion} />
                <CountryDetailInfo title="Capital: " text={capital.join()} />
              </div>
              <div className="right">
                <CountryDetailInfo
                  title="Top Level Domain: "
                  text={tld.join()}
                />
                <CountryDetailInfo
                  title="Currencies: "
                  text={currenciesList.join()}
                />
                <CountryDetailInfo
                  title="Languages: "
                  text={Object.values(languages)}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Border Countries: </h2>
              {borderCountry.map((item) => {
                if (!item.loading) {
                  return (
                    <button key={item.country.name.common}>
                      {item.country.name.common}
                    </button>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
