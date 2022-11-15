import './App.css';
import axios from "axios"
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import homeBar from "./assets/home-bar.png"
import AllBeers from './pages/AllBeers';
import { Container, Row } from 'react-bootstrap';
import BeerDetails from './pages/BeerDetails';
import { useEffect, useState } from "react"
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  const [fetching, setFetching] = useState(true)
  const [beerList, setBeerList] = useState([])

  useEffect (()=>{
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then (response => {
        setBeerList(response.data)
        setFetching(false)
    })
    .catch (error => console.log(error))
  },[])

  
  return (
    
    <div className="App">
      <div>
        <Link to="/"><img src={homeBar} alt="" className='img-home'/> </Link>
      </div>
       
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/beers' element={<AllBeers beerList={beerList}/>}></Route>
        <Route path='/random-beer' element={<RandomBeer/>}></Route>
        <Route path='/new-beer' element={<NewBeer/>}></Route>
        <Route path='/beers/:beerId' element={<BeerDetails beerList={beerList}/>}></Route>            
      </Routes>
    </div>
  );
}

export default App;
