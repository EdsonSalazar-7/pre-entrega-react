function Item({ producto }) {
  return (
    <article className="producto">
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h3 className="producto-nombre">{producto.nombre}</h3>
      <p className="producto-precio">${producto.precio.toLocaleString('es-AR')}</p>
      <p className="producto-stock">Stock disponible: {producto.stock}</p>
    </article>
  )
}

export default Item
