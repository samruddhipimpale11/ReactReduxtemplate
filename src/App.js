import logo from './logo.svg';
import './App.css';
//import Counter from './components/index';
import MovieList from './components/MovieList';
import Homepage from'./components/HomePage';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">



<Router>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">starwarmovie</a>
    </div>
    <ul class="nav navbar-nav">
     
      <li><a href="/homepage">Home</a></li>
      <li><a href="movies">movies</a></li>
      
    </ul>
   
  </div>
</nav>
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/movies" component={MovieList} />
     
    </Router>


    </div>
  );
}

export default App;
/*import logo from './logo.svg';
import './App.css';
//import Counter from './components/index';
import MovieList from './components/MovieList';
import Homepage from'./components/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="/homepage">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
<Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={MovieList} />
      </Switch>

    <MovieList />
    </div>
  );
}

export default App;
*/ 