import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink, useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('email')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>DeviceShop</NavLink>

                {user.isAuth ?

                <Nav className="d-flex align-items-center" style={{color:'white'}}>

                    <div
                        style={{color: 'white'}}
                        className="px-5"
                    >
                        Logged as: {localStorage.getItem('email')}
                    </div>

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