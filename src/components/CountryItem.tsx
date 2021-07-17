import styled from '@emotion/styled';
import React from 'react';
import { Country } from '../types';

interface Props {
  country: Country;
  onItemClick: (country: Country) => void;
}

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;
  cursor: pointer;

  @media (min-width: 420px) {
    flex: 0 0 33.333%;
  }
`;

const ListContent = styled.div`
  background-color: #f7f7f7;
  margin: 5px;
  padding: 10px 0;
`;

const CountryItem: React.FC<Props> = ({ country, onItemClick }) => {
  return (
    <>
      <ListItem key={country.ID} onClick={() => onItemClick(country)}>
        <ListContent>
          <h1>{country.Country}</h1>
          <div>New Confirmed: {country.NewConfirmed}</div>
          <div>New Deaths: {country.NewDeaths}</div>
          <div>New Recovered: {country.NewRecovered}</div>
        </ListContent>
        {country.Country}
      </ListItem>
    </>
  );
};

export default CountryItem;
