import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../images/reactMovie_logo.png';

import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from '../styles/StyledHeader';

function Header() {
  return (
    <StyledHeader>
      <div className="header-content"></div>
      <Link to="/">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
      </Link>
    </StyledHeader>
  );
}

export default Header;
