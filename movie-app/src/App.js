import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </BrowserRouter>
  );
};

export default App;