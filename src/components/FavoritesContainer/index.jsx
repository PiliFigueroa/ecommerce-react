import { useFavoritesContext } from "../../context/FavoritesContext"
import { VStack, Center, Text, Heading, HStack, Box } from '@chakra-ui/react'

const FavoritesContainer = () => {

    const { favoritesList } = useFavoritesContext()

    return(
        <Center>
            <VStack>
                <Heading my="40px">My Favorites</Heading>
                <Box boxShadow='lg' p='6' rounded='md' bg='white'>
                    {favoritesList.length > 0 
                        ? 
                        favoritesList.map(favorite => <Text>{favorite.product}</Text>)
                        :
                        <Text>You don't have favorites yet :(</Text>
                    }
                </Box>
            </VStack>
        </Center>
    )
}

export { FavoritesContainer }