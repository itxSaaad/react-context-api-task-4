import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';

function App() {
  return (
    <section className="container">
      <main className="mainContent">
        <h1>Cart Context</h1>
        <div className="items">
          <Item title="T-shirt" price={10} />
          <Item title="Shoes" price={20} />
          <Item title="Hat" price={5} />
        </div>
      </main>
      <aside className="sidebar">
        <Cart />
      </aside>
    </section>
  );
}

export default App;
