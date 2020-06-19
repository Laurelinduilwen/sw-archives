import React from 'react';
import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

function Grid({ header, children }) {
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent> {children}</StyledGridContent>
    </StyledGrid>
  );
}

export default Grid;
