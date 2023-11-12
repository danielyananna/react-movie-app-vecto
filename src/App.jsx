import Sidebar from "./components/Sidebar";
import {Routes, Route, Link} from 'react-router-dom';
import React from "react";
import TvShows from "./components/TvShows";
import Movies from "./components/Movies";
import Home from "./components/Home";
import Genres from "./components/Genres";
import WatchLater from "./components/WatchLater";
import Search from "./components/Search";

const App = () => {
  return (
      <div className={'wrapper df'}>
          <Sidebar />
          <Routes>
              <Route path="/search" element={<Search />} />
              <Route path="/tv-shows" element={<TvShows />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/home" element={<Home />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/watch-later" element={<WatchLater />} />
          </Routes>
      </div>
  )
}

export default App;
