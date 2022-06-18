import './App.css'
import { Navigation, ItemListContainer, ItemDetailContainer } from './components'

const App = () => {

  return (
    <div className="App">
      <Navigation />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
      {/* <ItemCount initial={1} stock={10} onAdd={() => {}} /> */}
    </div>
  )
}

export default App