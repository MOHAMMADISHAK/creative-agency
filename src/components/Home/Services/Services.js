import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Col, Container, FormControl, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    const history = useHistory();
    const handleItem = (title) => {
        history.push(`/order/${title}`);
    }
    const [service, setService] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/services'
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    
    return (
        <div className=" container App">  
        
        <h2 className="text-brand">Provide Awesome<span className="text-success">Services</span></h2>
        <br/> <br/>           
            <div className="row d-flex justify-content-center mb-5">
                
                {
                    service.map(workItem =>
                        <Col md={3}  className="d-flex justify-content-center" style={{ marginBottom: '15px', textAlign: 'center', cursor: 'pointer' }} onClick={() => handleItem(workItem.title)}>
                            <Card className="card-style pt-3">
                                <Card.Img variant="top" className="rounded mx-auto d-block" src={`data:image/png;base64,${workItem.image.img}`} />
                                <Card.Body>
                                    <Card.Title className="small"><h5>{workItem.title}</h5></Card.Title>
                                    <Card.Text> <small>{workItem.description}</small> </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                }
            </div>

        </div>
    );
};

export default Services;