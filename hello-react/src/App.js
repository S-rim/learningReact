
import MyComponent from './MyComponent'
import Counter from './counter'
import Say from './Say'
import EventPractice from './EventPractice'
import "./App.css";

import React from 'react';

const App = () => {
  return (
    <div>
      <MyComponent>리액트</MyComponent>
      <Counter></Counter>
      <Say></Say>
      <EventPractice></EventPractice>
    </div>
  );
};

export default App;
