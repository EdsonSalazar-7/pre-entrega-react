const enlaces = [
  { id: 'catalogo', texto: 'Catálogo', href: '#catalogo' },
  { id: 'agregar-producto', texto: 'Agregar producto', href: '#agregar-producto' },
  { id: 'contacto', texto: 'Contacto', href: '#contacto' },
]

function Header() {
  return (
    <header className="header">
      <p className="logo">NexGamingTech</p>
      <nav aria-label="Navegación principal">
        <ul className="nav-list">
          {enlaces.map((enlace) => (
            <li key={enlace.id}>
              <a href={enlace.href}>{enlace.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
