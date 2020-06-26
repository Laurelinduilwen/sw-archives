import React from 'react';
import { Link } from '@reach/router';

import NoImage from '../images/no_image.jpg';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { StyledActor } from '../styles/StyledActor';

function Actor({ actor, clickable }) {
  return (
    <StyledActor>
      {clickable ? (
        <Link to={`/character/${actor.name}`}>
          <img
            className="clickable"
            src={
              actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
            }
            alt="actorthumb"
          />
        </Link>
      ) : (
        <img
          src={
            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
          }
          alt="actorthumb"
        />
      )}

      <span className="actor-name">{actor.name}</span>
      <span className="actor-character">{actor.character}</span>
    </StyledActor>
  );
}

export default Actor;
