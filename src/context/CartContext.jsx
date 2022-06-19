import { createContext, useState, useContext } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])
    const [cartPrice, setCartPrice] = useState(0)

    const isInCart = (id) => cartList.find(prod => prod.id === id)

    const addToCart = (item, quantity) => {
      if (isInCart(item.id)) {
        const newCart = cartList.map(prod => {
          if (prod.id === item.id) {
            const newQuantity = prod.quantity + quantity
            return {item, quantity: newQuantity}
          } else {
            return item
          }
        })
        setCartList(newCart)
      } else {
        setCartList([...cartList, item])
      }
      setCartPrice(cartList.map(prod => cartPrice + (prod.price * prod.quantity)))
    }

    const cleanCart = () => setCartList([])

    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id != id))


    return (
        <CartContext.Provider value={{
          cartList,
          addToCart,
          cleanCart,
          removeProduct,
          cartPrice
        }}>
          {children}
        </CartContext.Provider>
      );
}