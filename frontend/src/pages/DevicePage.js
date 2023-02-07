import React from "react";
import {Col, Container, Row, Image, Card, Button} from "react-bootstrap";
import bigStar from '../assets/star.png';

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro 1', price: 25000, rating: 5, img: `https://picsum.photos/150/150/`}
    const description = [
        {id:1, title: 'RAM', description: '5Gb'},
        {id:2, title: 'Camera', description: '12Mp'},
        {id:3, title: 'CPU', description: '2GHz'},
        {id:4, title: 'Cores number', description: '4'},
        {id:5, title: 'Battery', description: '4000'},
    ]

    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className={"d-flex align-items-center"}>
                        <h2>{device.name}</h2>
                        <div
                            className={"d-flex align-items-center justify-content-center"}
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className={"d-flex flex-column align-items-center justify-content-around"}
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{device.price} UAH</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"}>
                <h2>Characteristics</h2>
                {description.map((info, index) =>
                    <Row
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgrey' : 'transparent', paddingBlock: 10}}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;