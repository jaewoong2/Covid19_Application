import styled from '@emotion/styled';
import React from 'react';

interface Props {
  newConfiremd: number;
  newDeaths: number;
  newRecovred: number;
}
const Wrapper = styled.div`
  text-align: center;
`;

const GlobalInfo: React.FC<Props> = ({ newConfiremd, newDeaths, newRecovred }) => {
  return (
    <div>
      <h1>Global Covid-19 data</h1>
      <h3>New Confirmed: {new Intl.NumberFormat().format(newConfiremd)} </h3>
      <h3>New Confirmed: {new Intl.NumberFormat().format(newDeaths)} </h3>
      <h3>New Confirmed: {new Intl.NumberFormat().format(newRecovred)} </h3>
    </div>
  );
};

export default GlobalInfo;
