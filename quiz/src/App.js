import React from 'react'
import HomeComponent from './components/HomeComponent';
import ResultComponent from './components/ResultComponent';
import QuizComponent from './components/QuizComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent/>
      <ResultComponent/>
    </div>
  );
}

export default App;
