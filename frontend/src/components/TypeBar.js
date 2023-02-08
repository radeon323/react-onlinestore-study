import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, ListGroup} from "react-bootstrap";
import {Context} from "../index";

const TypeBar = observer (() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>

            <ListGroup.Item
                style={{cursor: 'pointer', fontStyle: 'italic',
                    fontWeight: 'bold', backgroundColor: 'white', color: 'black',
                    borderColor: device.selectedType.id === device.types.id ? 'red' : 'lightgray'}}
                active={device.selectedType.id === device.types.id}
                onClick={() => device.setSelectedType(device.types)}
            >
                Show All
            </ListGroup.Item>

            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer',
                        backgroundColor: 'white', color: 'black',
                        borderColor: type.id === device.selectedType.id ? 'red' : 'lightgray'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;