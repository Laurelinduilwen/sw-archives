import React from 'react';
import { connect } from 'react-redux';
import Spinner from './elements/Spinner';

const mapStateToProps = ({ characters, starships }) => ({
  characters,
  starships,
});

function Character({ characterName, characters, starships }) {
  const character = characters.filter(function (obj) {
    return obj.name == `${characterName}`;
  })[0];

  console.log(characters);
  if (!character) return <Spinner />;

  const urlInStarship = (url) => character.starships.includes(url);
  const starship = starships.filter((item) => urlInStarship(item.url));

  console.log(character.starships);
  console.log(starship);
  if (!starships) return <Spinner />;
  if (!starship) return <Spinner />;
  return (
    <>
      <p> hello there {characterName}</p>
      <p>{character.name}</p>
      <p>{starship[0] ? `${starship[0].name}` : `NoShips`}</p>
    </>
  );
}

export default connect(mapStateToProps)(Character);
