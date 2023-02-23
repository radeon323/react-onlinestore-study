import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Screenshot from "../utils/Screenshot";

const NavBar = observer(({screenshotRef, screenshotGenerationProcess}) => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    const decodeEmail = () => {
        return jwt_decode(localStorage.getItem('token')).email
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>DeviceShop</NavLink>
                <Screenshot screenshotRef={screenshotRef} screenshotGenerationProcess={screenshotGenerationProcess} />
                {user.isAuth ?
                    <div
                        style={{color: 'white'}}
                        className="px-5"
                    >
                        Logged as: {decodeEmail()}
                    </div>
                :
                    <div
                        style={{color: 'white'}}
                        className="px-5"
                    >
                        Please, log In to have all permissions
                    </div>
                }

                {user.isAuth ?
                <Nav className="d-flex align-items-center" style={{color:'white'}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => history(ADMIN_ROUTE)}
                    >
                        Administration
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={() => logOut()}
                        className="ms-2"
                    >
                        Log out
                    </Button>
                </Nav>
                    :
                <Nav className="mr-auto" style={{color:'white'}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => history(LOGIN_ROUTE)}
                    >
                        Authorization
                    </Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;