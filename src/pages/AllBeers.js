import { Card, Col, Container, Row, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"


function AllBeers ({beerList}) {
   

    const renderBeers = beerList.map((beer)=>{
            return(
                <Col key={beer._id} >
                    <Link to={`/beers/${beer._id}`} className="card-all">
                        <div className="img-card">
                            <img src={beer.image_url} alt="" />
                        </div>
                        <div className="text-card">
                            <h3>{beer.name}</h3>
                            <p className="p-card">{beer.tagline}</p>
                            <p className="footer-card">{beer.contributed_by}</p>
                        </div>
                    </Link>
                </Col>
            )
        })
    
    return(
        <Container>
            <Row>
                {renderBeers}
            </Row> 
        </Container>
    )
}

export default AllBeers