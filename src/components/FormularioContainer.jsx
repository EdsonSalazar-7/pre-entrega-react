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
  // La imagen se guarda como File en el estado para subirla en la Etapa 6.
  // El input de tipo file no lleva value: el navegador no permite controlarlo.
  const [imagen, setImagen] = useState(null)
  // Estados simples para dar feedback en español y evitar envíos duplicados.
  const [subiendo, setSubiendo] = useState(false)
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  function manejarCambioCampo(event) {
    const { name, value } = event.target
    setValores((anterior) => ({ ...anterior, [name]: value }))
  }

  function manejarCambioImagen(event) {
    const archivo = event.target.files[0] ?? null
    setImagen(archivo)
    setError('')
    setExito('')
  }

  async function manejarEnvio(event) {
    event.preventDefault()

    // La imagen es obligatoria: sin archivo no hay nada para subir.
    if (imagen === null) {
      setError('Seleccioná una imagen antes de guardar el producto.')
      return
    }

    // La clave se lee desde .env.local y nunca se escribe en el código.
    // Aunque está fuera de Git, Vite la expone al navegador: no es un secreto.
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY

    if (!apiKey) {
      setError(
        'Falta configurar VITE_IMGBB_API_KEY en el archivo .env.local.',
      )
      return
    }

    setSubiendo(true)
    setError('')
    setExito('')

    try {
      console.log('Subiendo imagen a ImgBB...')

      // ImgBB API v1 pide el archivo en el campo "image" con multipart/form-data.
      // El navegador agrega el Content-Type solo: no hay que configurarlo.
      const formulario = new FormData()
      formulario.append('image', imagen)

      const respuesta = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        { method: 'POST', body: formulario },
      )

      if (!respuesta.ok) {
        throw new Error('Respuesta no válida del servidor')
      }

      const datos = await respuesta.json()

      if (!datos.success || !datos.data?.url) {
        throw new Error('Subida no confirmada por ImgBB')
      }

      const urlImagen = datos.data.url

      console.log('Imagen subida con éxito.')
      console.log('URL de la imagen:', urlImagen)
      console.log('Enviando los siguientes datos COMPLETOS a la API:')
      console.log({ ...valores, urlImagen })

      setExito('Producto listo: la imagen se subió con éxito.')
    } catch {
      setError('Ocurrió un error al subir la imagen. Probá de nuevo.')
    } finally {
      setSubiendo(false)
    }
  }

  return (
    <section className="formulario" id="agregar-producto">
      <h2>Agregar producto</h2>
      <FormularioProducto
        valores={valores}
        imagen={imagen}
        subiendo={subiendo}
        error={error}
        exito={exito}
        onCambiarCampo={manejarCambioCampo}
        onCambiarImagen={manejarCambioImagen}
        onEnviar={manejarEnvio}
      />
    </section>
  )
}

export default FormularioContainer
