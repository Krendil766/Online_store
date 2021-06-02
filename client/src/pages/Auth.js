import { Container, Card, Form, Row, Button } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom'
import { TYPE_ROUTER } from "../utils/const";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === TYPE_ROUTER.LOGIN_ROUTER;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin?"Авторизация":"Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
          // value={email}
          // onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3"
            style={{ fontSize: '12px' }}>
            <div>
              {
                isLogin ?
                  <Link to={TYPE_ROUTER.REGISTRATION_ROUTER}>
                    Зарегестрироваться
                  </Link>
                  :
                  <Link to={TYPE_ROUTER.LOGIN_ROUTER}>
                    Войти
                  </Link>
              }

            </div>
            <Button
              variant={"outline-success"}
            // onClick={click}
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>

        </Form>
      </Card>
    </Container>
  )
};

export default Auth;
