import { useContext } from "react";
import { Context } from "..";
import { useHistory } from "react-router-dom";
import { TYPE_ROUTER } from "../utils/const";
import { Navbar, Nav,Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = observer(() => {
  const history = useHistory();
  const { user } = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{ color: "white" }} to={TYPE_ROUTER.SHOP_ROUTER}>
          OnlineStore
        </Link>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(TYPE_ROUTER.ADMIN_ROUTER)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(TYPE_ROUTER.LOGIN_ROUTER)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
