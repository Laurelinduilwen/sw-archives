import React from 'react';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

function LoadMoreBtn({ text, cb }) {
  return (
    <StyledLoadMoreBtn type="button" onClick={cb}>
      {text}
    </StyledLoadMoreBtn>
  );
}

export default LoadMoreBtn;
