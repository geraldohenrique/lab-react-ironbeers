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
    <div className="card-details">
      <img className="img-card-details" src={beer.image_url} alt="" />
      <div className="card-details-body">
        <h5 className="card-details-title">{beer.name}</h5>
        <p className="card-details-text">
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
