import React,{useState} from 'react';
import { useGetJokesQuery } from "../redux/jokesApiSlice";

const Jokes = () => {
  const [reload, setReload] = useState(false);
  const { data, error, isLoading } = useGetJokesQuery({ skip: !reload });
    
    const handleReload = () => {
      setReload(!reload); 
    };
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

    return (
      <div>
      <button onClick={handleReload} className ='mt-4 w-64 h-10 rounded bg-slate-400 font-mono text-base text-black'> Click Me Get Another Joke</button>
      <p className='m-4 font-serif'>{data && data.data.content}</p>
      </div>
        );
      };
    
export default Jokes;

