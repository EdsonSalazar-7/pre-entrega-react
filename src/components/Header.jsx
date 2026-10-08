function Header() {
  return (
    <header className="header">
      <p className="logo">NexaTech Gaming</p>
      <nav aria-label="Navegación principal">
        <ul className="nav-list">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#catalogo">Catálogo</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
