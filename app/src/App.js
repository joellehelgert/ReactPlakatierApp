import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header class="bg-secondary p-4 flex justify-center" id="Header">
          <div class="max-w-max-w-screen-lg 2xl:max-w-screen-xl">
            <div class="text-center py-4 font-special">
              <span class="font-special text-5xl">Plakatierapp</span>
            </div>
            <nav>
              <ul class="flex flex-row justify-evenly">
                <li class="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/edit">Bearbeiten</Link>
                </li>
                <li class="nav-item">
                  <Link to="/assignment-overview">Auftragsübersicht</Link>
                </li>
                <li class="nav-item">
                  <Link to="/poster-overview">Plakatübersicht</Link>
                </li>
                <li class="nav-item">
                  <Link to="/route-plan">Route</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
