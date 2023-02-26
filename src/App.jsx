import './App.css';
import { CardList } from './components/CardList';
import { products } from "../src/data/products";

function App() {

  return (
   <>
   <div>
   <CardList list={products}/>
   </div>
  
   </>
  )
}

export default App
