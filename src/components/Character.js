import React from 'react';
import { connect } from 'react-redux';
import Spinner from './elements/Spinner';
import Navigation from './elements/Navigation';
import ProfileCard from './elements/ProfileCard';

const mapStateToProps = ({ characters, starships, films, vehicles, planets }) => ({
  characters,
  starships,
  films,
  vehicles,
  planets,
});

function Character({ characterName, characters, starships, vehicles, planets, films }) {
  const character = characters.filter(function (obj) {
    return obj.name === `${characterName}`;
  })[0];

  if (!character) return <Spinner />;

  const urlInStarship = (url) => character.starships.includes(url);
  const starship = starships.filter((item) => urlInStarship(item.url));

  const urlInVehicle = (url) => character.vehicles.includes(url);
  const vehicle = vehicles.filter((item) => urlInVehicle(item.url));

  const urlInPlanet = (url) => character.homeworld.includes(url);
  const planet = planets.filter((item) => urlInPlanet(item.url));

  const urlInFilm = (url) => character.films.includes(url);
  const film = films.filter((item) => urlInFilm(item.url));

  if (!starships) return <Spinner />;
  if (!starship) return <Spinner />;
  if (!vehicle) return <Spinner />;
  if (!planet) return <Spinner />;
  if (!film) return <Spinner />;
  return (
    <>
      <Navigation movie={characterName} />
      <ProfileCard
        character={character}
        starship={starship}
        vehicle={vehicle}
        planet={planet}
        film={film}
      />
    </>
  );
}

export default connect(mapStateToProps)(Character);
