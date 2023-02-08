import React, {useContext} from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const DeviceItem = ({deviceItem}) => {
    const history = useNavigate()
    const {device} = useContext(Context)

    const getBrandName = (id) => {
        return device.brands
            .filter(brand => brand.id === id)
            .map(brand => brand.name)
    }

    return (
        <Col md={3} className={"mt-3"} onClick={() => history(DEVICE_ROUTE + '/' + deviceItem.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + deviceItem.img} />
                <div className={"d-flex justify-content-between align-items-center mt-1 text-black-50"}>
                    <div>{getBrandName(deviceItem.brandId)}</div>
                    <div className={"d-flex align-items-center"}>
                        <div>{deviceItem.rating}</div>
                        <i className="ms-Icon ms-font-l ms-Icon--FavoriteStar text-black"></i>
                    </div>
                </div>
                <div>{deviceItem.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;