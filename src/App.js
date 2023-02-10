import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import MovieList from './Components/MovieList/MovieList';
import Home from './Pages/Home/Home';
import Movie from './Pages/MovieDetail/MovieDetail';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
