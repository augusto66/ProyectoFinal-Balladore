import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()
    const allProducts = 'https://dummyjson.com/products/category/mens-watches'
    const categoryProducts = `https://dummyjson.com/products/category/${id}`

    const getProducts = async () => {
        const res = await fetch('https://dummyjson.com/products')
        const parsed = await res.json()
        setItems(parsed.products)
    }

    useEffect(() => {
        //getProducts()
        fetch(id ? categoryProducts : allProducts)
            .then(res => res.json())
            .then(res => setItems(res.products))
    }, [id, categoryProducts])

    return (
        <ItemList items={items} />

    )
}

export default ItemListContainer