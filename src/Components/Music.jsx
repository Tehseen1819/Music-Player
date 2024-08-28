import React from 'react'
import Card from './Card'

const Music = ({track}) => {
  return (
    <div className='flex items-center justify-center '>
        <div className='w-[90%] flex flex-wrap justify-evenly items-center '>
       {
        track.map((track,index)=> <Card key={index} track={track}/>)
       }
        


    </div>
    </div>
  )
}

export default Music