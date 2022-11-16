import "./App.css";
import axios from "axios";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import homeBar from "./assets/home-bar.png";
import AllBeers from "./pages/AllBeers";
import BeerDetails from "./pages/BeerDetails";
import { useEffect, useState } from "react";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import { Spinner } from "react-bootstrap";

function App() {
  const [fetching, setFetching] = useState(true);
  const [beerList, setBeerList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeerList(response.data);
        setFetching(false);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="App">
      {location.pathname !== "/" && 
        <div className="nav-home">
          <Link to="/">
            <img src={homeBar} alt="" className="img-home" />{" "}
          </Link>
        </div>
      }
      {fetching && <Spinner animation="bolder"/>}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<AllBeers beerList={beerList} />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route
          path="/beers/:beerId"
          element={<BeerDetails beerList={beerList} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
