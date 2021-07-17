import styled from '@emotion/styled';
import React from 'react';
import { Country } from '../types';

interface Props {
  countries: Country[];
}

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;

  @media (min-width: 420px) {
    flex: 0 0 33.333%;
  }
`;

const CountryList: React.FC<Props> = ({ countries }) => {
  return (
    <ListWrapper>
      {countries.map((country) => (
        <ListItem key={country.ID}>
          <div>
            <h1>{country.Country}</h1>
            <div>New Confirmed: {country.NewConfirmed}</div>
            <div>New Deaths: {country.NewDeaths}</div>
            <div>New Recovered: {country.NewRecovered}</div>
          </div>
          {country.Country}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default CountryList;
