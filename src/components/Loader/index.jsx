import { Spinner, Center } from '@chakra-ui/react'

const Loader = () => {
    return(
        <Center mt="40px">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Center>
    )
}

export { Loader }