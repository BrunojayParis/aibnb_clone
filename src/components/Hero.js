import React from 'react'

const Hero = () =>{
    return(

        <div className='flex flex-col p-20'>
            <img className='rounded-xl' src={require("../images/solo-travel-city-grid-2-min.jpg")} />
            <h1 className='text-xl font-bold py-10'>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts.</p>
            <p>All without leaving home.</p>
        </div>
    )
}

export default Hero;
