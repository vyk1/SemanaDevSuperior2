import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

export default function Routes() {
  return (
    <BrowserRouter>
      {/* Navbar deve estar dentro do mecanismo de rotas (por causa do <Link/>) */}
      <Navbar />
      {/* Switch parecido como o switch case! */}
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

