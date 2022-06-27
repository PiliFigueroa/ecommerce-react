import { FaShoppingCart } from "react-icons/fa"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useDisclosure, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, Text, HStack, VStack, Image, Button, DrawerCloseButton } from '@chakra-ui/react'

const CartWidget = () => {

    const { cartList, cartItemsQuantity, totalPrice, removeProduct, cleanCart } = useCartContext()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
            <FaShoppingCart w={3} h={3} onClick={onOpen} cursor="pointer" />
            <Text className="badge" fontSize='xs'>{cartItemsQuantity}</Text>
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>Tu carrito</DrawerHeader>
                    <DrawerBody>
                        {cartList.length === 0 
                        ?
                            <Text>Aun no hay productos :(</Text>
                        :
                        <>
                            {cartList.map((prod, index) => 
                                <HStack key={`${prod.product}-${index}`} spacing={10} boxShadow='lg' p='6' rounded='md'>
                                    <Image src={prod.image} w="50px" />
                                    <VStack align="left" spacing={-0.5}>
                                        <Text fontSize="12px" as="b">{prod.product}</Text>
                                        <Text fontSize="12px">${prod.price}</Text>
                                        <Text fontSize="12px">Cantidad: {prod.quantity}</Text>
                                    </VStack>
                                    <Button colorScheme='red' size='sm' onClick={() => removeProduct(prod.id)}>X</Button>
                                </HStack>
                            )}
                            <Text my="10px">Total: ${totalPrice()}</Text>
                            <Link to="/checkout">
                                <Button colorScheme='red' size='sm'>Finalizar Compra</Button>
                            </Link>
                            <Button colorScheme='teal' size='sm' mx="5px" onClick={cleanCart}>Vaciar Carrito</Button>
                        </>
                        }
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export { CartWidget }