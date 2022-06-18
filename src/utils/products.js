export const products = [
    {
        id: 1,
        image: "../assets/dados_blue.jpg",
        product: "Set 7 dados basicos",
        category: "dados",
        price: 1500,
        stock: 100,
        initial: 1,
        config: {
            color: ['red', 'yellow', 'blue', 'purple', 'green'],
            size: ['standard', 'big'],
            material: ['plastic', 'ceramic', 'metal']
        }
    },
    {
        id: 2,
        image: "../assets/libro2.jpg",
        product: "Player's handbook",
        category: "dados",
        price: 11999,
        stock: 25,
        initial: 1,
        config: {
            languages: ['spanish', 'english'],
            material: ['photograph paper']
        }
    },
    {
        id: 3,
        image: "../assets/folios.jpg",
        product: "Folios Gold Premium",
        category: "dados",
        price: 200,
        stock: 1000,
        initial: 1,
        config: {
            size: ['standard', 'big'],
            material: ['plastic']
        }
    },
    {
        id: 4,
        image: "../assets/miniaturas.jpg",
        product: "Kit miniaturas inicial",
        category: "dados",
        price: 2500,
        stock: 20,
        initial: 1,
        config: {
            size: ['small','medium'],
            material: ['plastic', 'metal']
        }
    }
]