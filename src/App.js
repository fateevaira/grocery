import './App.css';
import image from './shopping.jpg';
import imageMan from './man.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={ image } alt='Grocery' width='200px'/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={ imageMan } alt='Grocery' width='200px'/>
      </div>
    </div>
  );
}

export default App;
