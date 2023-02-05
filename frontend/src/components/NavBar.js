import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>DeviceShop</NavLink>
                {user.isAuth ?
                <Nav className="mr-auto" style={{color:'white'}}>
                    <Button variant={"outline-light"}>Administration</Button>
                    <Button variant={"outline-light"} className="ms-2">Log in</Button>
                </Nav>
                    :
                <Nav className="mr-auto" style={{color:'white'}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;