
import './App.css';
import Article from './Components/Article/Article';
// import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div >
      <h1 className='header'>Phone Corner</h1>
      <Shop></Shop>
      <Article></Article>
      {/* <Cart></Cart> */}
    </div>
  );
}

export default App;
