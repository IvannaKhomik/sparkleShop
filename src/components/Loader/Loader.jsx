import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="#ff9900"
        strokeWidth="5"
        animationDuration="0.75"
        width="72"
        visible={true}
      />
    </LoaderContainer>
  );
};
