import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeAnim from "./Components/WelcomeAnim/WelcomeAnim";
import MainMenu from "./Components/MainMenu/MainMenu";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeAnim} />
        <Route exact path="/home" component={MainMenu} />
      </Switch>
    </Router>
  );
}

export default App;
