import { useContext } from "react";
import { Context } from "..";
import { Link } from 'react-router-dom';
import { TYPE_ROUTER } from "../utils/const";
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { observer } from "mobx-react-lite";


const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={TYPE_ROUTER.SHOP_ROUTER}>Online Store</Navbar.Brand>
            {
                user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'}>Панель Администратора</Button>
                        <Button
                            className="ml-2"
                            variant={'outline-light'}
                            onClick={() => user.setIsAuth(false)
                            }>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
            }
        </Navbar >

    )
})

export default NavBar