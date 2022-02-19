import './App.scss'
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ImageCard from './components/ImageCard';
import CreamSection from './components/CreamSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <ImageCard/>
      <CreamSection/>
    </div>
  );
}

export default App;