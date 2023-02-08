import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className={"mt-5"}>
            {pages.map(page =>
                <Pagination.Item
                    style={{cursor: 'pointer',
                        backgroundColor: 'white', color: 'black',
                        borderColor: device.page === page ? 'red' : 'lightgray'}}
                    key={page}
                    active={device.page === page}
                    activeLabel={'1'}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;