function FormularioProducto({
  valores,
  imagen,
  onCambiarCampo,
  onCambiarImagen,
  onEnviar,
}) {
  return (
    <form className="formulario-producto" onSubmit={onEnviar}>
      <label className="formulario-campo" htmlFor="producto-id">
        Id
        <input
          id="producto-id"
          name="id"
          type="text"
          value={valores.id}
          onChange={onCambiarCampo}
          placeholder="Ej: 7"
        />
      </label>

      <label className="formulario-campo" htmlFor="producto-nombre">
        Nombre
        <input
          id="producto-nombre"
          name="nombre"
          type="text"
          value={valores.nombre}
          onChange={onCambiarCampo}
          placeholder="Ej: Teclado gamer"
        />
      </label>

      <label className="formulario-campo" htmlFor="producto-precio">
        Precio
        <input
          id="producto-precio"
          name="precio"
          type="number"
          value={valores.precio}
          onChange={onCambiarCampo}
          placeholder="Ej: 25000"
        />
      </label>

      <label className="formulario-campo" htmlFor="producto-stock">
        Stock
        <input
          id="producto-stock"
          name="stock"
          type="number"
          value={valores.stock}
          onChange={onCambiarCampo}
          placeholder="Ej: 10"
        />
      </label>

      <label className="formulario-campo" htmlFor="producto-imagen">
        Imagen
        <input
          id="producto-imagen"
          name="imagen"
          type="file"
          accept="image/*"
          onChange={onCambiarImagen}
        />
      </label>

      {imagen !== null && (
        <p className="formulario-imagen-nombre">
          Imagen seleccionada: {imagen.name}
        </p>
      )}

      <button type="submit" className="formulario-boton">
        Guardar producto
      </button>
      <p className="formulario-aclaracion">
        La imagen se subirá en la Etapa 6. Por ahora solo queda guardada en el
        formulario.
      </p>
    </form>
  )
}

export default FormularioProducto
