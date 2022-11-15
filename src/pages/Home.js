import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgBeers from "../assets/beers.png"
import imgRandomBeer from "../assets/random-beer.png"
import imgNewBeer from "../assets/new-beer.png"

function Home(){
  return(
    <div>
      <Link to="/beers">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imgBeers} />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/random-beer">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imgRandomBeer}/>
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/new-beer">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imgNewBeer} />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
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

