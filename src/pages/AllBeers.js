import { Card, Col, Container, Row, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"


function AllBeers ({beerList}) {
   

    const renderBeers = beerList.map((beer)=>{
            return(
                <Col key={beer._id}>
                    <Card>
                        <Link to={`/beers/${beer._id}`}>
                            <Card.Img variant="top" src={beer.image_url} />
                        </Link>
                        <Card.Body>
                        <Card.Title>{beer.name}</Card.Title>
                        <Card.Text>{beer.tagline}</Card.Text>
                        <Card.Text>{beer.contributed_by}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    
    return(
        <Col>
            {renderBeers}
        </Col> 
    )
}

export default AllBeers