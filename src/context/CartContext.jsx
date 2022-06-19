import { createContext, useState, useContext } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])

    return (
        <CartContext.Provider value={{
          
        }}>
          {children}
        </CartContext.Provider>
      );
}