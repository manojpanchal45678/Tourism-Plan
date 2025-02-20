import React, { useState } from 'react';
//import './App.css'
import Data from './Data';
import Tours from './components/Tours';

function App() {
  const [tours, setTours] = useState(Data);
    
  function onRemoveTour(id)
        {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }
   
   if(tours.length === 0)
   {
      return (
        <div className="refresh">
            <h2> Empty </h2>
            <div className="img">
              <img src="/src/assets/new-data.png" alt="No Data !" />
            </div>
            <button className="btn-white" onClick={() => setTours(Data)}>
              Refresh
            </button>
        </div>
      )
   }

  return (
     <div>
      <Tours tours={tours} removeTour={onRemoveTour}></Tours>
     </div>
  )
}

export default App;
