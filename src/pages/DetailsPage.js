import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';
import axios from 'axios';

const DetailsPage = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (err) {
        setError('Failed to load Pokémon details.');
      }
    };
    fetchPokemonDetails();
  }, [name]);

  if (error) return <p className="error">{error}</p>;
  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="details-container">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

export default DetailsPage;