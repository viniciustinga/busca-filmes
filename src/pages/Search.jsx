import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getMovies from "../utils/getMovies";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    async function fetchData() {
      const searchWithQueryURL = `${searchURL}?query=${query}&${apiKey}&language=pt-BR`;
      const response = await getMovies(searchWithQueryURL);
      setMovies(response);
    }
    fetchData();
  }, [query]);

  return (
    <div className="container">
      <div className="title">
        Resultados para: <span className="query-text">{query}</span>
      </div>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando.</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
