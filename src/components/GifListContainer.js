import React, { useState, useEffect } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      fetchGifs(searchQuery);
    }
  }, [searchQuery]);

  const fetchGifs = async (query) => {
    const apiKey = '6O3zoaenMDHcmZAbIfVmcFQjIAI4dTqm'; 
    try {
      const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const allGifs = data.data;
      const firstThreeGifs = allGifs.slice(0, 3);
      setGifs(firstThreeGifs);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container">
      <GifSearch onFormSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
