import { useState } from 'react'
import FormularioProducto from './FormularioProducto.jsx'

const valoresIniciales = {
  id: '',
  nombre: '',
  precio: '',
  stock: '',
}

function FormularioContainer() {
  const [valores, setValores] = useState(valoresIniciales)
  // La imagen se guarda como File en el estado para usarla en la Etapa 6.
  // El input de tipo file no lleva value: el navegador no permite controlarlo.
  const [imagen, setImagen] = useState(null)

  function manejarCambioCampo(event) {
    const { name, value } = event.target
    setValores((anterior) => ({ ...anterior, [name]: value }))
  }

  function manejarCambioImagen(event) {
    const archivo = event.target.files[0] ?? null
    setImagen(archivo)
  }

  function manejarEnvio(event) {
    event.preventDefault()
    console.log({ ...valores, imagen })
  }

  return (
    <section className="formulario" id="agregar-producto">
      <h2>Agregar producto</h2>
      <FormularioProducto
        valores={valores}
        imagen={imagen}
        onCambiarCampo={manejarCambioCampo}
        onCambiarImagen={manejarCambioImagen}
        onEnviar={manejarEnvio}
      />
    </section>
  )
}

export default FormularioContainer
