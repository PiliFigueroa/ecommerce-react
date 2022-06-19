import { VStack, Center, Text, Image, Heading, Select, HStack } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount'

const ItemDetail = ({ img, name, price, id, stock, config, description, initial }) => {

    return(
        <Center boxShadow='lg' p='6' rounded='md' bg='white' m="20px auto" maxWidth="800px">
            <Image src={img} w="200px" />
            <VStack maxWidth="500px" align="left">
                <Heading>{name}</Heading>
                <Text className='bold' fontSize='2xl'>${price}</Text>
                <Text>Stock: {stock}</Text>
                <Text>{description}</Text>                
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
                <ItemCount initial={initial} stock={stock} onAdd={() => {}} />
            </VStack>
        </Center>
    )
}

export { ItemDetail }