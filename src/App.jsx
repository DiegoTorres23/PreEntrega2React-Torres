import './Index.css'
import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {

  return(
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={'/'} element={<ItemListContainer />} />
        <Route exact path={'/category/:id'} element={<ItemListContainer />} />
        <Route exact path={'/item/:id'} element={<ItemDetailContainer />} />
        <Route exact path={'/checkout'} element={<Checkout/>} />
        <Route exact path={'/cart'} element={<Cart />} />
        <Route exact path={'/*'} element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
  
}

export default App;
