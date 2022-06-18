import './App.css'
import { Navigation, ItemListContainer, ItemDetailContainer } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App