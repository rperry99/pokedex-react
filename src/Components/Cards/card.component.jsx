import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`}
        alt="Pokemon"
      />
      <h2>{props.pokemon.name}</h2>
    </div>
  );
};
