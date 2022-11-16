import {Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


function AllBeers ({beerList, fetching}) {
   

    const renderBeers = beerList.map((beer)=>{
            return(
                <Col key={beer._id}>
                    <Link to={`/beers/${beer._id}`} className="card-all">
                        <div className="img-card">
                            <img src={beer.image_url} alt="" />
                        </div>
                        <div className="text-card">
                            <h3 className="h-card">{beer.name}</h3>
                            <p className="p-card">{beer.tagline}</p>
                            <p className="footer-card">{beer.contributed_by}</p>
                        </div>
                    </Link>
                </Col>
            )
        })
    
    return(
        <Container className="container-card-all">
           
                {renderBeers}
           
        </Container>
    )
}

export default AllBeers