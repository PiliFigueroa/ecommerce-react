import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemListContainer = () => {
    const valorInicial = "Pilar"
    //const state = useState(valorInicial)
    const [nombre, setNombre] = useState(valorInicial)

    const handleClick = () => setNombre("Victoria")

    // const obj = {
    //     nombre: "Pilar",
    //     apellido: "Figueroa"
    // }

    // const { nombre, apellido } = obj

    // console.log(nombre)
    // console.log(apellido)

    // console.log(state)

    return(
        <div>
            <h1>{nombre}</h1>
            <Button onClick={handleClick}>Cambiar nombre</Button>
        </div>
    )
}

export { ItemListContainer }