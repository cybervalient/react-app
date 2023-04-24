import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import ShowProductos from './components/ShowProductos';
import CreateProducto from './components/CreateProducto';
import EditProducto from './components/EditProducto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowProductos/>} />
        <Route path='/create' element={<CreateProducto/>} />
        <Route path='/edit/:id' element={<EditProducto/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
