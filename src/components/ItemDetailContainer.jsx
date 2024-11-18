import{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer (){
const [item, setItem] = useState()
const {idItem} = useParams()

useEffect(() => {
    fetch(`https://dummyjson.com/products/${idItem}`)
    .then(res => res.json())
    .then(res => setItem (res));

},[idItem])

return (
<ItemDetail item={item}/>
)
}
export default ItemDetailContainer