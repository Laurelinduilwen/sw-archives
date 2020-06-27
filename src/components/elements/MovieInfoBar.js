import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helpers';

import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

function MovieInfoBar({ time, budget, revenue, toggle }) {
  return (
    <StyledMovieInfoBar>
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="movieinfobar-info">Running time: {calcTime(time)}</span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-budget" name="money" size="2x" />
          <span className="movieinfobar-info">Budget: {convertMoney(budget)}</span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-revenue" name="ticket" size="2x" />
          <span className="movieinfobar-info">Revenue: {convertMoney(revenue)}</span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-toggle" name="film" size="2x" />
          <span className="movieinfobar-info" onClick={toggle}>
            Toggle Crawl
          </span>
        </div>
      </div>
    </StyledMovieInfoBar>
  );
}

export default MovieInfoBar;
