import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/userApi";

const App = () => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setIsAuth(true);
        user.setUser(true);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
};

export default App;
