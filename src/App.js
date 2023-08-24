import { useRef } from 'react';
import './App.css';
import {Context} from './Context';
import List from './page/List';
import Write from './page/Write';

function App() {
  let wrup = useRef();
  let popup = (e)=>{
    e.preventDefault();
    wrup.current.classList.toggle('active');
  }
  return (
    <Context>
      <span onClick={popup}>+</span> 
      <List />
      <Write wrup={wrup}/>
    </Context>
  );
}

export default App;
