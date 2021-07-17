import styled from '@emotion/styled';
import React from 'react';
import { Country } from '../types';
import CountryItem from './CountryItem';

interface Props {
  countries: Country[];
  onItemClick: (country: Country) => void;
}

const ListWrapper = styled.ul`
  padding: 0;
  display: flex;
`;

const CountryList: React.FC<Props> = ({ countries, onItemClick }) => {
  return (
    <ListWrapper>
      {countries.map((country) => (
        <CountryItem country={country} onItemClick={onItemClick} />
      ))}
    </ListWrapper>
  );
};

export default CountryList;
