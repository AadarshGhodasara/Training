import React from 'react';
import { useEffect } from 'react';
import './App.css';
import {fetchData} from './component/redux/action';
import {useDispatch} from 'react-redux';
import Table from './component/Table/Table';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData(10,0));
    setTimeout(() => {
    }, 1000);
  },[dispatch]);

  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
