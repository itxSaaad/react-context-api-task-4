import './App.css';
import Item from './components/Item';

function App() {
  return (
    <header className="container">
      <h1>Cart Context</h1>
      <Item title="T-shirt" price={10} />
    </header>
  );
}

export default App;
