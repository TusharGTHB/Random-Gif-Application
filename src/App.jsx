import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() 
{  return(
     <div className="background w-full h-screen flex flex-col items-center overflow-x-hidden gap-4">
     <h1 className="bg-white  text-center rounded-lg mt-10 w-11/12 text-4xl font-bold px-10 py-2 ">Random GIF</h1> 
     <div className="flex flex-col w-full items-center mt-4">
      <Random/>
      <Tag/>
     </div>
    </div>
  )
}
