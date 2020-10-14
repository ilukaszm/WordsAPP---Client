import React, { FC } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const StyledLoader = styled(Loader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner: FC = () => {
  return <StyledLoader type="ThreeDots" color="#ED254E" height={80} width={80} />;
};

export default Spinner;
