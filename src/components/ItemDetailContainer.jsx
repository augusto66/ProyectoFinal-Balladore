import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDetail } from "../firebase/db";

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { idItem } = useParams();

  useEffect(() => {
    getDetail(idItem, setItem);
  }, [idItem]);

  return <ItemDetail item={item} />;
}
export default ItemDetailContainer;
