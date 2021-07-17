import React, { useCallback, useEffect, useState } from 'react';
import GlobalInfo from './components/GlobalInfo';
import { Country, ResponseData } from '../src/types';
import CountryList from './components/CountryList';
import { css, Global } from '@emotion/react';

const App: React.FC = () => {
  const [data, setData] = useState<ResponseData | undefined>();
  const [activeCountries, setActiveCountries] = useState<Country[]>([]);

  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary');
    const data: ResponseData = await result.json();

    setData(data);
  };

  const onCountryClick = useCallback(
    (country: Country) => {
      const countryIndex = activeCountries.findIndex((activeCountries) => activeCountries.ID === country.ID);

      if (countryIndex > -1) {
        setActiveCountries((prevCountries) => {
          const newCountries = prevCountries.filter((_, i) => i !== countryIndex);

          return newCountries;
        });
      } else {
        setActiveCountries([...activeCountries, country]);
      }
    },
    [activeCountries],
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: #f1f1f1;
            color: #7d7d7d;
          }
        `}
      />
      {activeCountries.map((activeCountry) => (
        <span>{activeCountry.Country}</span>
      ))}

      <GlobalInfo
        newConfiremd={data?.Global?.NewConfirmed}
        newDeaths={data?.Global?.NewDeaths}
        newRecovred={data?.Global?.NewRecovered}
      />
      <CountryList countries={data?.Countries} onItemClick={onCountryClick} />
    </div>
  );
};

export default App;
