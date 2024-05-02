import './Index.css'
import Banner from './components/Banner';
import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={'/'} element={<ItemListContainer />} />
        <Route exact path={'/category/:id'} element={<ItemListContainer />} />
        <Route exact path={'/item/:id'} element={<ItemDetailContainer />} />
        <Route exact path={'/*'} element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
