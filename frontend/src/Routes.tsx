import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/js/src/collapse.js";  
import NavBar from "./components/NavBar";
import HomeCard from "./Pages/HomeCard";
import HomeSearch from "./Pages/HomeSearch";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route path="/" exact>
        <HomeCard/>
        </Route>
        <Route path="/search">
          <HomeSearch/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
