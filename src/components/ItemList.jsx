import Item from './Item.jsx'

function ItemList({ productos }) {
  return (
    <div className="productos">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemList
