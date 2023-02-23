import React from 'react';
import {Modal} from "react-bootstrap";
import RotateSpinner from "../assets/spinner";

const ModalScr = ({loadingScreenshot, setLoadingScreenshot}) => {
    return (
        <Modal
            show={loadingScreenshot}
            onCancel={() => setLoadingScreenshot(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            transparent={true}
        >
            <Modal.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <p className="d-block my-3"> Screenshot generation in process... </p>
                <RotateSpinner/>
            </Modal.Body>
        </Modal>
    );
};

export default ModalScr;