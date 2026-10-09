import { useEffect, useState } from 'react'
import ItemList from './ItemList.jsx'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/productos.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudieron cargar los productos')
        }
        return response.json()
      })
      .then((data) => {
        setProductos(data)
        setCargando(false)
      })
      .catch(() => {
        setError('No se pudieron cargar los productos. Intentá de nuevo más tarde.')
        setCargando(false)
      })
  }, [])

  if (cargando) {
    return (
      <section className="catalogo" id="catalogo">
        <h2>Catálogo de productos</h2>
        <p>Cargando productos...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="catalogo" id="catalogo">
        <h2>Catálogo de productos</h2>
        <p className="catalogo-error">{error}</p>
      </section>
    )
  }

  return (
    <section className="catalogo" id="catalogo">
      <h2>Catálogo de productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos disponibles por el momento.</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </section>
  )
}

export default ItemListContainer
