import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  const {gif,loading,fetchdata}= useGif(); 
   
    return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col  gap-y-5 mt-[15px] items-center'>
      <h1 className='mt-[15px] font-bold underline uppercase text-2xl'> A Random Gif </h1>
        {
          loading ? <Spinner/> : <img src={gif} width="450" alt=''/>
        } 
      <button 
      className='w-10/12 text-lg bg-yellow-200 py-2 rounded-lg mb-[20px]'
      onClick={()=>fetchdata()}
      >Generate</button>
    </div>
  )
}

export default Random
