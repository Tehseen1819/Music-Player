import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Music from './Components/Music'

const App = () => {

  const [track, setTrack] = useState([]);
  const [keyword, setkeyword] = useState("");
  const getTrack= async ()=>{
    let data = await fetch(`https://v1.nocodeapi.com/visheshpandey/spotify/dNxiRTREOhvTzsYn/search?q=${keyword}&type=track`);
    let realdata= await data.json();
    const {items} = realdata?.tracks;
   // let items=realdata?.tracks?.items;
    console.log(realdata.tracks.items[0]);
    setTrack(items);
  }
  let setval=(val)=>{
    setkeyword(val);
  }



  return (

    <div className=' w-full h-screen'>
      <Navbar getTrack={getTrack} keyword={keyword} setval={setval}/>
      <Music track={track}/>
    </div>
  )
}

export default App