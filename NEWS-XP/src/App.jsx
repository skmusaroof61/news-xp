
import { useState } from 'react';
import Navbar from './components/navbar';
import Newsboard from './components/newsboard'; // Make sure to import the Newsboard component

const App = () => {
  const[category,setCategory]=useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory } />
      <Newsboard category={category} /> {/* Add a closing tag for the Newsboard component */}
    </div>
  );
};

export default App;