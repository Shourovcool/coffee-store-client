import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className='text-6xl text-zinc-600 text-center my-20 font-semibold'>Hot Hot Cold Cold Coffees: {coffees.length}</h1>
      <h2 className='text-center my-10 text-xl'>Click here to <span className='font-extrabold text-red-500'><Link to="/addCoffee">Add Coffee</Link></span></h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
