import { VStack, Center, Text, Image, Heading, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, HStack, Button } from '@chakra-ui/react'
import { useCartContext } from "../../context/CartContext"
import { useState } from 'react'

const Checkout = () => {

    const { cartList, totalPrice } = useCartContext()

    const [values, setValues] = useState({
        email: "",
        fullname: ""
    })
    const [isError, setIsError] = useState(false)

    const handleInputChange = (e) => setValues({
        ...values,
        [e.target.name]: e.target.value
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm(values.email, values.fullname)) {
          return alert("Compra finalizada");
        }
      }

    const validateForm = (email, fullname) => {   
        if (!fullname.length) {
          setIsError(!isError)
          return false
        }
    
        if (!email.length) {
          setIsError(!isError)
          return false
        }
    
        if (fullname.length < 2) {
          setIsError(!isError)
          return false
        }
        return true
      }

    return(
        <Center>
            <VStack align='left'>
                <Heading my="40px">Checkout</Heading>
                <VStack>
                    {cartList.map(prod => 
                        <HStack key={prod.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg="white">
                            <Image src={prod.image} w="100px"></Image>
                            <Text as='b'>{prod.product}</Text>
                            <Text as='b'>Cantidad: {prod.quantity}</Text>
                        </HStack>)}
                    <Text>Total: ${totalPrice()}</Text>
                </VStack>
                <Text as='b'>Complete sus datos:</Text>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <FormControl>
                        <FormLabel htmlFor='email'>Nombre completo</FormLabel>
                        <Input id='text' name='email' type='text' bg='white' onChange={handleInputChange} />
                    </FormControl>
                    <FormControl isInvalid={isError}>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input id='email' name='fullname' type='email' bg='white' onChange={handleInputChange} />
                        {!isError ? (
                            <FormHelperText>
                                Nunca compartiremos tus datos.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Debes completar este campo.</FormErrorMessage>
                        )}
                    </FormControl>
                    <Button colorScheme='red' type='submit' mt="20px">Enviar</Button>
                </form>
            </VStack>
        </Center>
    )
}

export { Checkout }