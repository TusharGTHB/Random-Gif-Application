import  { React, useEffect, useState } from 'react'
import axios from 'axios'
 
const KEY =process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${KEY}`;




const useGif = (tag) => {
    const[gif , setgif]=useState('');
    const[loading,setloading]=useState('false');
   
    async function fetchdata(tag)
    {       setloading(true);
       
         const {data}= await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imagesrc=data.data.images.downsized_large.url;
         setgif(imagesrc);
         setloading(false);
    }
    useEffect(
     ()=>{fetchdata('car');
      }, [] )
      return {gif,loading,fetchdata}
 }

export default useGif
