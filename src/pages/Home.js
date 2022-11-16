import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgBeers from "../assets/beers.png"
import imgRandomBeer from "../assets/random-beer.png"
import imgNewBeer from "../assets/new-beer.png"

function Home(){
  return(
    <div>
      <Link to="/beers">
        <Card style={{ width: '100vw' }}>
          <Card.Img variant="top" src={imgBeers} className="img-opt-home"/>
          <Card.Body className="card-body">
            <Card.Title className="tit-card-home">All Beers</Card.Title>
            <Card.Text className="text-card-home">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/random-beer">
        <Card style={{ width: '100vw' }}>
          <Card.Img variant="top" src={imgRandomBeer} className="img-opt-home"/>
          <Card.Body>
            <Card.Title className="tit-card-home">Random Beer</Card.Title>
            <Card.Text className="text-card-home">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/new-beer">
        <Card style={{ width: '100vw' }}>
          <Card.Img variant="top" src={imgNewBeer} className="img-opt-home"/>
          <Card.Body>
            <Card.Title className="tit-card-home">New Beer</Card.Title>
            <Card.Text className="text-card-home">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default Home

