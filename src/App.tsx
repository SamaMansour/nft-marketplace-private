import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Layout from "./app/components/Layout/Layout";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <Layout/>
    </div>

{/* <BrowserRouter>
<Routes>
  <Route path='/' element={}/>
  <Route path='/detail/:movieId' element={}/>
  <Route path='/popular' element={}/>

</Routes>
</BrowserRouter> */}
</>
  );
}

export default App;
