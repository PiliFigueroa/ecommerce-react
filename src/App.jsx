import './App.css'
import { Navigation, ItemListContainer, ItemDetailContainer } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category/product/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App