import './App.css'
import { Navigation, ItemListContainer, ItemDetailContainer, FavoritesContainer, Checkout } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import { FavoritesContextProvider } from "./context/FavoritesContext"

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
        <FavoritesContextProvider>
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/favorites" element={<FavoritesContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:category/product/:id" element={<ItemDetailContainer />} />
            </Routes>
          </BrowserRouter>
        </FavoritesContextProvider>
      </CartContextProvider>
    </div>
  )
}

export default App