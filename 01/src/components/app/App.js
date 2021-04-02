import {useState, useCallback} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
// import Button from '../button/Button';
import './App.css';

function App() {

  const [userName, userNameState] =  useState('John');
  const [setYear, setYearState] =  useState('2021');

  const handleClick = useCallback(() => {
    if (userName === 'John') {
      userNameState('Mary');
    } else {
      userNameState('John');
    }
  }, [userName]);

  const yearClick = useCallback(() => {
        setYearState (Number(setYear) + 1);
  }, [setYear]);

  return (
    <div className='App'>
      <Header name={userName}/>
      <h1>
        HELLO WORLD!
      </h1>
      <button onClick={handleClick}>PUSH MI</button>
      <Footer year={setYear}/>
      <button onClick={yearClick}>PUSH MI</button>
    </div>
  );
}

export default App;
