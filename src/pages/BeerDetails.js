import { useParams } from "react-router-dom";

export default function BeerDetails({beerList}) {

    const {beerId} = useParams()

        
    const foundBeer = beerList.find((oneBeer) => {
        return oneBeer._id === beerId;
    })

  return (
    <div class="card">
      <img class="card-img-top" src={foundBeer.image_url} alt="" />
      <div class="card-body">
        <h5 class="card-title">{foundBeer.name}</h5>
        <p class="card-text">
            {foundBeer.tagline}
            {foundBeer.first_brewed}
            {foundBeer.attenuation_level}
            {foundBeer.description}
            {foundBeer.contributed_by}
        </p>
    </div>
    </div>
  );
}
