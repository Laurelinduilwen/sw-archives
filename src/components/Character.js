import React from 'react';
import { connect } from 'react-redux';
import Spinner from './elements/Spinner';
import Navigation from './elements/Navigation';
import ProfileCard from './elements/ProfileCard';

const mapStateToProps = ({ characters, starships, films, vehicles }) => ({
  characters,
  starships,
  films,
  vehicles,
});

function Character({ characterName, characters, starships, vehicles }) {
  const character = characters.filter(function (obj) {
    return obj.name === `${characterName}`;
  })[0];

  console.log(characters);
  if (!character) return <Spinner />;

  const urlInStarship = (url) => character.starships.includes(url);
  const starship = starships.filter((item) => urlInStarship(item.url));

  const urlInVehicle = (url) => character.vehicles.includes(url);
  const vehicle = vehicles.filter((item) => urlInVehicle(item.url));

  console.log(character.starships);
  console.log(starship);
  console.log(vehicle);
  if (!starships) return <Spinner />;
  if (!starship) return <Spinner />;
  if (!vehicle) return <Spinner />;
  return (
    <>
      <Navigation movie={characterName} />
      <ProfileCard character={character} starship={starship} />
      {/*  <p> hello there {characterName}</p>
      <p>{character.name}</p>
      <p>{starship[0] ? `${starship[0].name}` : `NoShips`}</p> */}
    </>
  );
}

export default connect(mapStateToProps)(Character);
