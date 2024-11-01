import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Minha Vitrine</div>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link href="/">Produtos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#333',
  color: '#fff',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
};

const navItemStyle = {
  fontSize: '1rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  transition: 'color 0.3s',
};

