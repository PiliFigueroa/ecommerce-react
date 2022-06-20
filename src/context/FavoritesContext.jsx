import { createContext, useState, useContext } from "react"

const FavoritesContext = createContext([])
export const useFavoritesContext = () => useContext(FavoritesContext)

export function FavoritesContextProvider({children}) {

    const [favoritesList, setFavoritesList] = useState([])

    const isInFavorites = (id) => favoritesList.find(prod => prod.id === id)

    const addToFavorites = (item) => {
        if (isInFavorites(item.id)) {
            setFavoritesList(favoritesList.filter(prod => prod.id != item.id))
        } else {
            setFavoritesList([...favoritesList, item])
        }
    }

    return (
        <FavoritesContext.Provider value={{
            addToFavorites,
            favoritesList
        }}>
          {children}
        </FavoritesContext.Provider>
      );
}