import { FaShoppingCart } from "react-icons/fa"
import { useDisclosure, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader } from '@chakra-ui/react'

const CartWidget = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
            <FaShoppingCart w={6} h={6} onClick={onOpen} cursor="pointer" />
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Your cart</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export { CartWidget }