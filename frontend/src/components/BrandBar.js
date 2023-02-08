import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className="d-flex flex-wrap">

            <Card
                style={{cursor: 'pointer', fontStyle: 'italic', fontWeight: 'bold'}}
                className={"p-3"}
                onClick={() => device.setSelectedBrand(device.brands)}
                border={device.selectedBrand.id === device.brands.id ? 'danger' : 'light'}
            >
                Show All
            </Card>

                 {device.brands.map(brand =>
                    <Card
                        style={{cursor: 'pointer'}}
                        key={brand.id}
                        className={"p-3"}
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </Card>
                )}
        </div>
    );
});

export default BrandBar;