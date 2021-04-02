import {useState, useCallback} from 'react';
import logo from '../_img/logo.svg';
import Display from '../_display/Display';
import './App.css';

function App() {

  const [userCount, userCountState] =  useState('0');

  const increaseClick = useCallback(() => {
    if (userCount >= 99) userCountState (99)
    else userCountState (Number(userCount) + 1);
  }, [userCount]);

  const decreaseClick = useCallback(() => {
    if (userCount <= 0) userCountState (0)
    else userCountState (Number(userCount) - 1);
  }, [userCount]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Lessons. Homework 1.
        </p>
      </header>
      <main className="App-main">
        <button className="btn-left" onClick={decreaseClick}>&lsaquo;</button>
        <Display countSet={userCount}/>
        <button className="btn-right" onClick={increaseClick}>&rsaquo;</button>
      </main>
    </div>
  );
}

export default App;
