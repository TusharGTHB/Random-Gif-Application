import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () =>  {
   const[tag,settag]=useState('car');
  
   const {gif,loading,fetchdata}= useGif(tag);
   
    return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col  gap-y-5 mt-[15px] items-center'>
      <h1 className='mt-[15px] font-bold underline uppercase text-2xl'> Random Gif </h1>
        {
          loading ? <Spinner/> : <img src={gif} width="450" alt=''/>
        } 
        <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event)=>settag(event.target.value)}
        value={tag}
        />
      <button 
      className='w-10/12 text-lg bg-yellow-200 py-2 rounded-lg mb-[20px]'
      onClick={()=>fetchdata(tag)}
      >Generate</button>
    </div>
  )
}


export default Tag
