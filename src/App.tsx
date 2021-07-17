import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GlobalInfo from './components/GlobalInfo';
import { ResponseData } from '../src/types';
import CountryList from './components/CountryList';

const App: React.FC = () => {
  const [data, setData] = useState<ResponseData | undefined>();

  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary');
    const data: ResponseData = await result.json();

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GlobalInfo
        newConfiremd={data?.Global?.NewConfirmed}
        newDeaths={data?.Global?.NewDeaths}
        newRecovred={data?.Global?.NewRecovered}
      />
      <CountryList countries={data?.Countries} />
    </div>
  );
};

export default App;
