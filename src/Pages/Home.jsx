import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Jumbotron from "../components/Fragments/jumbotron";
import MovieSection from "../components/Fragments/cards";
import BadgeList from "../components/Fragments/BadgeList";
import { getMovieLists, getGenreList } from "../services/movies.service";


const HomePage = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    getMovieLists('now_playing').then((res) => setNewMovies(res.data.results));
    getMovieLists('popular').then((res) => setPopularMovies(res.data.results));
    getMovieLists('top_rated').then((res) => settopRatedMovies(res.data.results));
    getMovieLists('upcoming').then((res) => setUpcomingMovies(res.data.results));
    getGenreList().then((res) => setGenreList(res.data.genres));
  }, [])

  return (
    <Layout>
      <Jumbotron movies={newMovies}/>
      <div className="flex flex-col gap-6 p-6">
        <BadgeList genres={genreList} />
        <MovieSection movies={newMovies} title='Now Playing🔥' />
        <MovieSection movies={popularMovies} title='Popular🔝' />
        <MovieSection movies={topRatedMovies} title='Now Playing🚀' />
        <MovieSection movies={upcomingMovies} title='Upcoming⏳' />
      </div>
    </Layout>
  );
};

export default HomePage;