import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p1>{subtitle}</p1>
    </TitleWrapper>
  );
};

export default Title;
