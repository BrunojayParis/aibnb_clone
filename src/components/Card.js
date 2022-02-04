import React from "react";

const Card = (props) => {
  return (
    <div class="px-10 py-20 bg-gray-100 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
      <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
        <div className='flex flex-col p-20 '>
          <img src={require(`../images/${props.coverImg}`)} className="h-16" />
          <div>
            <img src="" />
            <span>{props.title}</span>

          </div>
          <p></p>
          <p>jjngkjngs</p>
          <p>sdfsdmglskdfg</p>
        </div>
        )
      </div>
    </div>
  )
}

export default Card
