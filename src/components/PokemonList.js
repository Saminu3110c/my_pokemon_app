import React from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemon }) => (
  <div className="pokemon-list">
    {pokemon.map((p) => (
      <PokemonCard key={p.name} pokemon={p} />
    ))}
  </div>
);

export default PokemonList;