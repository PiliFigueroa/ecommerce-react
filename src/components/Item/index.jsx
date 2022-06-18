import { VStack, Box, Center, Button, Text, Image } from '@chakra-ui/react'

const Item = ({ img, name, price, id }) => {

    return(
        <VStack boxShadow='lg' p='6' rounded='md' bg='white' m="15px" minWidth="275px" maxWidth="300px">
            <Image src={img} alt={name} w="100px" />
            <Text>{name}</Text>
            <Text>${price}</Text>
            <Button size='xs'>Ver Detalle</Button>
        </VStack>
    )
}

export { Item }