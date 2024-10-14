import React, { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';
import SearchBar from '../components/SearchBar';
import './HomePage.css';
import axios from 'axios';

const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      );
      setPokemon((prev) => [...prev, ...response.data.results]);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch Pokémon. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  const handleSearch = (term) => setSearch(term.toLowerCase());
  const loadMore = () => setOffset((prev) => prev + 20);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.includes(search)
  );

  return (
    <div className="home-container">
      <SearchBar onSearch={handleSearch} />
      <PokemonList pokemon={filteredPokemon} />
      {error && <p className="error">{error}</p>}
      {loading ? <p>Loading...</p> : <button onClick={loadMore}>Load More</button>}
    </div>
  );
};

export default HomePage;