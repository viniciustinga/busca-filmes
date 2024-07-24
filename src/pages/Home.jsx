import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import getMovies from "../utils/getMovies";
import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
      const response = await getMovies(topRatedUrl);
      setTopMovies(response);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="title">Melhores filmes:</div>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando.</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
