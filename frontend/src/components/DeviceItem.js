import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useNavigate()
    console.log(history)

    return (
        <Col md={3} className={"mt-3"} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className={"d-flex justify-content-between align-items-center mt-1 text-black-50"}>
                    <div>Samsung...</div>
                    <div className={"d-flex align-items-center"}>
                        <div>{device.rating}</div>
                        <i className="ms-Icon ms-font-l ms-Icon--FavoriteStar text-black"></i>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;