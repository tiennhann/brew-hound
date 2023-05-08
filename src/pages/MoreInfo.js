import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Beer.css';
import '../styles/MoreInfo.css';
import { Link, useParams } from 'react-router-dom';
import { BeerMenuList } from "../helpers/BeerMenuList";

function MoreInfo(beerItem) {
    const index = useParams();
    const beer = BeerMenuList[index.id];
    console.log(beer);

  return (
    <section>
        <Container className='page' >
            <div>
                <Row>
                    <Col sm={12}>
                        <Link to='/pairing'>Back to Beer Menu</Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <h1>{beer.name}</h1>
                        <h3>ABV: {beer.ABV}</h3>
                        <h3>IBUs: {beer.IBU}</h3>
                        <img src={beer.image}/> 
                    </Col>
                    <Col sm={6}>
                        <h2>Food Pairing</h2>
                        <p>{beer.FoodPairing}</p>
                        <h2>Aroma</h2>
                        <p>{beer.Aroma}</p>
                        <h2>Mouthfeel</h2>
                        <p>{beer.Mouthfeel}</p>
                        <h2>Color</h2>
                        <p>{beer.color}</p>
                        <h2>Description</h2>
                        <p>{beer.description}</p>
                    </Col>
                    
                </Row>
                <div className=''>
                    
                        
                </div>
            </div>
        </Container>
        
    </section>
    
  )
}

export default MoreInfo