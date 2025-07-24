import { useContext } from "react";
import BorderCountryBtn from "./borderCountryBtn.jsx";
import { CountryDetailInfo } from "./countryDetailInfo.jsx";
import { IsDarkContext } from "../context/themeContext.js";

export function CountryDetail({ country, setCountryDetail, setShowDetail }) {
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

  const isDark = useContext(IsDarkContext);

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

  const getLanguageList = (lang) => {
    const language = Object.values(lang);
    return language.join(", ");
  };

  const languageList = getLanguageList(languages);

  return (
    <div className="h-screen">
      <div className="px-16 py-16">
        <button
          onClick={() => setShowDetail(false)}
          className={`flex items-center px-8 py-2 rounded-md gap-4 ${
            isDark
              ? "bg-(--Dark-Mode-Elements) shadow-2xl text-(--Dark-Mode-Text-Light-Mode)"
              : "bg-(--Light-Mode-Background) shadow-sm text-(--Light-Mode-Text)"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            height={15}
            width={15}
            className={`${
              isDark
                ? "fill-(--Dark-Mode-Text-Light-Mode)"
                : "fill-(--Light-Mode-Text)"
            }`}
          >
            <path
              d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
              data-name="4-Arrow Left"
            />
          </svg>
          <p className="text-inherit">Back</p>
        </button>
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
                  text={nativeNameCommon.join(", ")}
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
                  text={tld.join(", ")}
                />
                <CountryDetailInfo
                  title="Currencies: "
                  text={currenciesList.join()}
                />
                <CountryDetailInfo title="Languages: " text={languageList} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Border Countries: </h2>
              {borders.map((code, index) => {
                return (
                  <BorderCountryBtn
                    borderCountry={code}
                    key={index}
                    setCountryDetail={setCountryDetail}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
