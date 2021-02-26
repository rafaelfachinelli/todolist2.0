import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Todo from "./views/Todo";
import About from "./views/About";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/todos" />
      </Switch>
    </HashRouter>
  );
}
