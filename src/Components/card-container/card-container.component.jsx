import React from 'react';
import { Card } from '../Cards/card.component.jsx';
import './card-container.styles.css';

export const CardContainer = (props) => {
  return (
    <div className="card-list">
      <div className="card-list">
        {props.pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
