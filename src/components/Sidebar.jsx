import { X, Menu } from 'lucide-react';
import { navigation } from '../data/portfolio';

export default function Sidebar({ active, menuOpen, setMenuOpen, go }) {
  return (
    <>
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand-row">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>A<span>.</span></a>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
        </div>
        <nav>{navigation.map(([label, id, Icon]) => (
          <button key={id} className={`nav-link ${active === id ? 'active' : ''}`} onClick={() => go(id)}>
            <Icon size={21} /><span>{label}</span>
          </button>
        ))}</nav>
        <div className="sidebar-bottom"><span className="status-dot" /> Available for opportunities</div>
      </aside>
      <header className="mobile-top">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>अ<span>.</span></a>
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
      </header>
    </>
  );
}
