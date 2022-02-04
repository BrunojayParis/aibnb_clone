import React from 'react'

   

function Navbar() {
    return (
      <div className='flex h-12 shadow-md h-nav px-5 ' >
        <img className='max-w-logo  ' src={require("../images/airbnb-logo.png")}  />

      </div>
    );
  }
  
  export default Navbar;