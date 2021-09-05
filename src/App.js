import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeAnim from "./Pages/WelcomeAnim/WelcomeAnim";
import MainMenu from "./Pages/MainMenu/MainMenu";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeAnim} />
        <Route exact path="/home" component={MainMenu} />
        <Route exact path="/:id" component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
