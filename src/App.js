import './App.scss'
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ImageCard from './components/ImageCard';
import CreamSection from './components/CreamSection';
import Carousel from './components/Carousel';
import { Data }from './components/Data'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <ImageCard/>
      <CreamSection/>
      <Carousel slides = {Data} />
    </div>
  );
}

export default App;