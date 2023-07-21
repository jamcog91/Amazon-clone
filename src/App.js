import './App.css';
import Header from './Header.js';
import Home from './Home';
import { BrouserRouter as Router, Switch, Route } from './react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
