import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => (
  <Link to={`/pokemon/${pokemon.name}`} className="pokemon-card">
    <h3>{pokemon.name}</h3>
  </Link>
);

export default PokemonCard;