import { CountryDetailInfo } from "./countryDetailInfo";

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

  const selectedBorder = [
    {
      flags: {
        png: "https://flagcdn.com/w320/at.png",
        svg: "https://flagcdn.com/at.svg",
        alt: "The flag of Austria is composed of three equal horizontal bands of red, white and red.",
      },
      name: {
        common: "Austria",
        official: "Republic of Austria",
        nativeName: {
          bar: {
            official: "Republik Österreich",
            common: "Österreich",
          },
        },
      },
      tld: [".at"],
      currencies: {
        EUR: {
          name: "Euro",
          symbol: "€",
        },
      },
      capital: ["Vienna"],
      region: "Europe",
      subregion: "Central Europe",
      languages: {
        deu: "German",
      },
      borders: ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
      population: 8917205,
    },
    {
      flags: {
        png: "https://flagcdn.com/w320/be.png",
        svg: "https://flagcdn.com/be.svg",
        alt: "The flag of Belgium is composed of three equal vertical bands of black, yellow and red.",
      },
      name: {
        common: "Belgium",
        official: "Kingdom of Belgium",
        nativeName: {
          deu: {
            official: "Königreich Belgien",
            common: "Belgien",
          },
          fra: {
            official: "Royaume de Belgique",
            common: "Belgique",
          },
          nld: {
            official: "Koninkrijk België",
            common: "België",
          },
        },
      },
      tld: [".be"],
      currencies: {
        EUR: {
          name: "Euro",
          symbol: "€",
        },
      },
      capital: ["Brussels"],
      region: "Europe",
      subregion: "Western Europe",
      languages: {
        deu: "German",
        fra: "French",
        nld: "Dutch",
      },
      borders: ["FRA", "DEU", "LUX", "NLD"],
      population: 11555997,
    },
  ];

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
              {selectedBorder.map((item) => {
                return (
                  <button key={item.name.common}>{item.name.common}</button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
