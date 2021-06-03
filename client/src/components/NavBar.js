import { useContext } from "react";
import { Context } from "..";
import { useHistory } from "react-router-dom";
import { TYPE_ROUTER } from "../utils/const";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const history = useHistory();
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href={TYPE_ROUTER.SHOP_ROUTER}>Online Store</Navbar.Brand>
      {user.isAuth ? (
        <Nav className="ml-auto">
          <Button
            variant={"outline-light"}
            onClick={() => history.push(TYPE_ROUTER.ADMIN_ROUTER)}
          >
            Панель Администратора
          </Button>
          <Button
            className="ml-2"
            variant={"outline-light"}
            onClick={() => history.push(TYPE_ROUTER.LOGIN_ROUTER)}
          >
            Выйти
          </Button>
        </Nav>
      ) : (
        <Nav className="ml-auto">
          <Button
            variant={"outline-light"}
            onClick={() => user.setIsAuth(true)}
          >
            Авторизация
          </Button>
        </Nav>
      )}
    </Navbar>
  );
});

export default NavBar;
