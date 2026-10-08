import { useState } from 'react'

function Item({ producto }) {
  const [cantidad, setCantidad] = useState(0)
  const [mensaje, setMensaje] = useState('')

  function disminuirCantidad() {
    setCantidad((actual) => (actual > 0 ? actual - 1 : actual))
    setMensaje('')
  }

  function aumentarCantidad() {
    setCantidad((actual) => (actual < producto.stock ? actual + 1 : actual))
    setMensaje('')
  }

  function agregarAlCarrito() {
    const textoUnidad = cantidad === 1 ? 'unidad' : 'unidades'
    setMensaje(`Agregaste ${cantidad} ${textoUnidad} de ${producto.nombre}.`)
  }

  return (
    <article className="producto">
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h3 className="producto-nombre">{producto.nombre}</h3>
      <p className="producto-precio">${producto.precio.toLocaleString('es-AR')}</p>
      <p className="producto-stock">Stock disponible: {producto.stock}</p>
      <div className="cantidad-controles">
        <button
          type="button"
          className="cantidad-boton"
          onClick={disminuirCantidad}
          disabled={cantidad === 0}
        >
          −
        </button>
        <span className="cantidad-valor">{cantidad}</span>
        <button
          type="button"
          className="cantidad-boton"
          onClick={aumentarCantidad}
          disabled={cantidad === producto.stock}
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="agregar-boton"
        onClick={agregarAlCarrito}
        disabled={cantidad === 0}
      >
        Agregar al carrito
      </button>
      {mensaje !== '' && <p className="agregar-mensaje">{mensaje}</p>}
    </article>
  )
}

export default Item
