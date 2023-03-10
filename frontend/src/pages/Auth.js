import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className={"p-5"}>
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"enter your email"}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"enter password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={"password"}
                    />
                    <Row className={"d-flex justify-content-between mt-3 pe-3 ps-1"}>
                        {isLogin ?
                            <div className="mt-3 col-6">
                                Don`t have an account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                            </div>
                            :
                            <div className="mt-3 col-6">
                                Already registered? <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
                            </div>
                        }
                        <Button
                            className="mt-2 col-2"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Log In' : 'Register'}
                        </Button>
                    </Row>


                </Form>
            </Card>
        </Container>
    );
});

export default Auth;