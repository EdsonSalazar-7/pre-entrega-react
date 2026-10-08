import FormularioContainer from './components/FormularioContainer.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <Layout>
      <section className="welcome" id="inicio">
        <h2>Bienvenido a NexaTech Gaming</h2>
        <p>
          Explorá nuestro catálogo de tecnología y videojuegos, y simulá la
          carga de un producto desde el formulario.
        </p>
      </section>
      <ItemListContainer />
      <FormularioContainer />
    </Layout>
  )
}

export default App
