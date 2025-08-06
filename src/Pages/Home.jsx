import { useEffect } from "react";
import Layout from "../components/Layout";
import MovieSection from "../components/Fragments/cards";
import { getMovieLists } from "../services/movies.service";
import { useState } from "react";


const HomePage = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  
  useEffect(() => {
    getMovieLists('now_playing').then((res) => setNewMovies(res.data.results));
    getMovieLists('popular').then((res) => setPopularMovies(res.data.results));
    getMovieLists('top_rated').then((res) => settopRatedMovies(res.data.results));
    getMovieLists('upcoming').then((res) => setUpcomingMovies(res.data.results));
  }, [])
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <MovieSection movies={newMovies} title='Now Playing🔥' />
        <MovieSection movies={popularMovies} title='Popular🔝' />
        <MovieSection movies={topRatedMovies} title='Now Playing🚀' />
        <MovieSection movies={upcomingMovies} title='Upcoming⏳' />
      </div>
    </Layout>
  );
};

export default HomePage;