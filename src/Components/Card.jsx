import React from 'react'

const Card = ({track}) => {
    let url=track.album.images[0].url;
  return (
    <div className='w-80 h-80 flex flex-col justify-centre items-center bg-stone-400 hover:bg-stone-500 m-2 rounded-md'>
        <div className=' flex justify-center items-center bg-slate-100 h-[50%] w-[60%] md:h-[60%] mt-2 rounded-md overflow-hidden'>
            <img src={url} alt="img" />
        </div>
        <div className='h-[40%] w-[90%]  flex justify-center flex-col items-center gap-2'>
            <div className='mt-2 font-semibold '>{track.album.name}</div>
            <audio controls src={track.preview_url}  className='w-[100%]'></audio>
        
        </div>
    </div>
  )
}

export default Card