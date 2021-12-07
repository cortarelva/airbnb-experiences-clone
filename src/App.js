
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import data from '../src/data';


function App() {

  const cards = data.map(item => {
    return (
      <Card
          key={item.id}
          {...item}
        />
    )
  })


  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-section">
       {cards}
      </div>
      
    </>
  );
}

export default App;
