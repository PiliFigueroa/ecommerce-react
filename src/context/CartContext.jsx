import { createContext, useState, useContext, useEffect } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])
    const [cartItemsQuantity, setCartItemsQuantity] = useState(0)

    const isInCart = (id) => cartList.find(prod => prod.id === id)

    const addToCart = (item, quantity) => {
      if (isInCart(item.id)) {
        const newCart = cartList.map(prod => {
          if (prod.id === item.id) {
            const newQuantity = prod.quantity + quantity
            return {...prod, quantity: newQuantity}
          } else {
            return prod
          }
        })
        setCartList(newCart)
      } else {
        const newProduct = {...item, quantity: quantity}
        setCartList([...cartList, newProduct])
      }   
    }

    useEffect(() => {
      setCartItemsQuantity(cartList.length)
    },[cartList.length])

    const totalPrice = () => {
      let total = 0
      cartList.forEach(item => total += item.quantity * item.price)
      return total
    }

    const cleanCart = () => setCartList([])

    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id != id))


    return (
        <CartContext.Provider value={{
          cartList,
          addToCart,
          cleanCart,
          removeProduct,
          cartItemsQuantity,
          totalPrice
        }}>
          {children}
        </CartContext.Provider>
      );
}