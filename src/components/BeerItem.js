import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function BeerItem({image, name, ABV, description, index}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Card style={{ width: '18rem', color: 'black' }}>
            <Card.Img variant='top' src={image}/>
            
            <Card.Body>
                <Card.Title className='name'>{name}</Card.Title>
                <Card.Text className='abv'>{ABV}</Card.Text>
            </Card.Body>
            <Link to={{pathname: `/moreInfo/${index}`}}>
                <Button variant='link' onClick={handleShow}>
                    More Info!
                </Button>
            </Link>
         </Card>
        

        <Modal show={show} onHide={handleClose} size='xl' aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Body>
                <Container id='contained-modal-title-vcenter'>
                    <Row className='align-items-center'>
                        <Col md='auto'>
                            
                        </Col>
                        <Col md='auto'>
                            <h3>{name}</h3>
                            <img className='resize' src={image}/>
                        </Col>
                        <Col style={{  }}> 
                            
                            <p> {description} </p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>

            
        </>
    );
}

export default BeerItem;
