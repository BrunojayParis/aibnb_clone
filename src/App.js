import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Data from './Data'
import Card from './components/Card'
import './App.css';



function App() {
  const cards = Data.map((data)=>{
    return(
      <Card 
      id={data.id}
      title={data.title}
      description={data.description}
      price={data.price}
      coverImg={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      openSpots={data.openSpots}     
      />

    )
  })
  return (
    <div>
      <Navbar/>
      <Hero/>
      {cards}
    </div>
  );
}

export default App;
