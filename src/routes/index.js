import { Route, Switch } from "react-router-dom";
import Characters from "containers/Characters";
import HouseDetail from "containers/HouseDetail";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Characters} />
      <Route exact path="/houses/:id" component={HouseDetail} />
    </Switch>
  );
}

export default Routes;
