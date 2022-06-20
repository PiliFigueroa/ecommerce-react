import { VStack, Center, Text, Image, Heading, Select, HStack, Tooltip } from '@chakra-ui/react'
import { FaCreditCard, FaRegCreditCard, FaRegHeart, FaHeart } from "react-icons/fa"
import { useCartContext } from "../../context/CartContext"
import { useFavoritesContext } from "../../context/FavoritesContext"
import { ItemCount } from '../ItemCount'
import { useState } from 'react'
import { CustomCard } from '../../utils/Tooltip'



const ItemDetail = ({ listProduct }) => {

    const { image, product, price, stock, config, description, initial } = listProduct

    const { addToCart } = useCartContext()
    const { addToFavorites } = useFavoritesContext()
    const [fav, setFav] = useState(false)

    const handleFav = () => {
        setFav(!fav)
        addToFavorites(listProduct)
    }
    const onAdd = (quantity) => addToCart(listProduct, quantity)

    return(
        <Center boxShadow='lg' p='6' rounded='md' bg='white' m="20px auto" maxWidth="800px">
            <Image src={image} w="200px" />
            <VStack maxWidth="500px" align="left" mx="15px">
                <HStack>
                    <Heading>{product}</Heading>
                    <Tooltip fontSize='xs' bg="whitesmoke" color="#1a202c" label={fav ? "Remove favorite :(" : "Add to favorites!"} aria-label='A tooltip' hasArrow>
                        <CustomCard>
                            {fav ? <FaHeart size='20px' onClick={handleFav} cursor="pointer" /> : <FaRegHeart size='20px' onClick={handleFav} cursor="pointer" />}
                        </CustomCard>
                    </Tooltip>
                </HStack>
                <Text className='bold' fontSize='2xl'>${price}</Text>
                <Text>Stock: {stock}</Text>
                <HStack>
                    <FaCreditCard /><FaRegCreditCard />
                </HStack>
                <Text fontSize='xs'>{description}</Text>                
                {config.color && 
                <>
                    <Text className='bold'>Color</Text>
                    <HStack>
                        {config.color.map((col, index) => <div key={`${col}-${index}`} className="capitalize circle" style={{backgroundColor: col}} value={col}></div>)}
                    </HStack>
                </>}
                {config.material &&           
                <Select placeholder="Material">
                    {config.material.map((mat, index) => <option className='capitalize' key={`${mat}-${index}`}>{mat}</option>)}
                </Select>}
                {config.size && 
                <Select placeholder="Sizes">
                    {config.size.map((siz, index) => <option className='capitalize' key={`${siz}-${index}`}>{siz}</option>)}
                </Select>}
                {config.languages && 
                <Select placeholder="Sizes">
                    {config.languages.map((lang, index) => <option className='capitalize' key={`${lang}-${index}`}>{lang}</option>)}
                </Select>}
                <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
            </VStack>
        </Center>
    )
}

export { ItemDetail }