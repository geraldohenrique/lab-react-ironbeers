import { useParams } from "react-router-dom";

export default function BeerDetails({beerList}) {

    const {beerId} = useParams()

        
    const foundBeer = beerList.find((oneBeer) => {
        return oneBeer._id === beerId;
    })

  return (
    <div className="card-details">
      <img class="img-card-details" src={foundBeer.image_url} alt="" />
      <div class="card-details-body">
        <h5 class="card-details-title">{foundBeer.name}</h5>
        <p class="card-details-text">
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
