import axios from "axios";
import { useEffect, useState } from "react";

export default function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => console.log(error));
 }, []);


  return (
    <div class="card">
      <img class="card-img-top" src={beer.image_url} alt="" />
      <div class="card-body">
        <h5 class="card-title">{beer.name}</h5>
        <p class="card-text">
          {beer.tagline}
          {beer.first_brewed}
          {beer.attenuation_level}
          {beer.description}
          {beer.contributed_by}
        </p>
      </div>
    </div>
  );
}
