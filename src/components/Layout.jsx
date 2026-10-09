import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
