import './App.css'
import { Welcome } from './components/Welcome';
import { Bubble } from './components/Bubble';
import { useState } from 'react';
import { Home } from './pages/Home';

function App() {

  return (
    <>
    {/* <Home /> */}
    <Welcome />
    <Bubble count={10} />
    </>
  )
}

export default App
