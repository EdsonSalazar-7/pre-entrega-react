function FormularioProducto({
  valores,
  imagen,
  subiendo,
  error,
  exito,
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
          required
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
          required
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
          min="0"
          required
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
          min="0"
          required
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
          required
        />
      </label>

      {imagen !== null && (
        <p className="formulario-imagen-nombre">
          Imagen seleccionada: {imagen.name}
        </p>
      )}

      <button type="submit" className="formulario-boton" disabled={subiendo}>
        {subiendo ? 'Subiendo imagen...' : 'Guardar producto'}
      </button>

      {error !== '' && <p className="formulario-error">{error}</p>}
      {exito !== '' && <p className="formulario-exito">{exito}</p>}

      <p className="formulario-aclaracion">
        Al guardar, la imagen se sube a ImgBB y los datos completos solo se
        muestran por consola.
      </p>
    </form>
  )
}

export default FormularioProducto
