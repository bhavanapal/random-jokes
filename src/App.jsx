import './App.css'
import Jokes from "./Components/Jokes";

function App(){

  return (
    <div className ="container w-full max-w-2xl mx-auto px-4 pt-4 mt-20 border-2 rounded border-sky-950 bg-neutral-300">
    <h1 className='text-2xl font-bold font-mono bg-slate-600 text-white'>Random Jokes</h1>
    <Jokes/>
    </div>
     
  );
};

export default App
