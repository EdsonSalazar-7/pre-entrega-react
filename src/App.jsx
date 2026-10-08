import FormularioContainer from './components/FormularioContainer.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <Layout>
      <section className="welcome" id="inicio">
        <h2>Bienvenido a NexaTech Gaming</h2>
        <p>
          Esta es la estructura base del sitio. En las próximas etapas se
          agregará el catálogo de productos.
        </p>
      </section>
      <ItemListContainer />
      <FormularioContainer />
    </Layout>
  )
}

export default App
