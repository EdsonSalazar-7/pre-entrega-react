const team = [
  { name: 'Ezequiel', role: 'Frontend Developer', initial: 'E' },
  { name: 'María', role: 'Diseñadora UX/UI', initial: 'M' },
  { name: 'Tiago', role: 'Soporte / Producto', initial: 'T' },
]

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <p className="footer-info">
        NexaTech Gaming — Tienda de tecnología y videojuegos. Calidad y buen
        precio para tu setup.
      </p>
      <ul className="team-list">
        {team.map((member) => (
          <li key={member.name} className="team-card">
            <span className="avatar" aria-hidden="true">
              {member.initial}
            </span>
            <p className="team-name">{member.name}</p>
            <p className="team-role">{member.role}</p>
          </li>
        ))}
      </ul>
      <p className="footer-copy">
        © 2026 NexaTech Gaming. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
