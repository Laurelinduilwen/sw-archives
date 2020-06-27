import React from 'react';
import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import MovieThumb from './MovieThumb';
import { StyledProfileCard } from '../styles/StyledProfileCard';

function ProfileCard({ character, starship, vehicle, planet, film }) {
  return (
    <StyledProfileCard>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieThumb
            image={
              character.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${character.poster_path}`
                : NoImage
            }
            clickable={false}
          />
        </div>
        <div className="movieinfo-text">
          <h1>{character.name}</h1>
          <h3>HOME PLANET</h3>
          <p>{planet[0].name}</p>
          <h3>BIRTH YEAR</h3>
          <p>{character.birth_year}</p>
          <h3>EYE COLOR</h3>
          <p>{character.eye_color}</p>

          <div className="rating-director">
            <div>
              <h3>HEIGHT</h3>
              <div className="score">{`${character.height}cm`}</div>
            </div>
            <div className="director">
              <h3>STARSHIP{starship.length > 1 ? 'S' : ''}</h3>
              {starship.map((element) => (
                <p key={element.name}>{element.name}</p>
              ))}
            </div>
            <div className="director">
              <h3>VEHICLE{vehicle.length > 1 ? 'S' : ''}</h3>
              {vehicle.map((element) => (
                <p key={element.name}>{element.name}</p>
              ))}
            </div>

            <div className="director">
              <h3>FILM{film.length > 1 ? 'S' : ''}</h3>
              {film.map((element) => (
                <p key={element.title}>{element.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledProfileCard>
  );
}

export default ProfileCard;
