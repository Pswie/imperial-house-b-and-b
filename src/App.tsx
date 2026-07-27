import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Wine, Bed, Map, Wind, Check, ChevronRight } from 'lucide-react';
import './index.css';

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Navbar Component
const Navbar = () => {
  const loc = useLocation();
  const isActive = (path: string) => loc.pathname === path ? 'active' : '';

  return (
    <nav className="navbar fade-in">
      <Link to="/" className="nav-brand">Imperial House</Link>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
        <Link to="/struttura" className={`nav-link ${isActive('/struttura')}`}>La Struttura</Link>
        <Link to="/territorio" className={`nav-link ${isActive('/territorio')}`}>Il Territorio</Link>
        <Link to="/contatti" className={`nav-link ${isActive('/contatti')}`}>Contatti</Link>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer style={{ background: '#0a0a0a', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
    <div className="container">
      <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Imperial House B&B</h3>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>Scafati, Campania — Un'oasi di comodità a passo dalla storia.</p>
      <div style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
        © 2026 Imperial House Luxe.
      </div>
    </div>
  </footer>
);

// Home Page
const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Typography-focused Hero */}
      <section className="hero">
        <div className="container slide-up">
          <span className="hero-subtitle">B&B di Lusso • Scafati</span>
          <h1 className="hero-title">L'Arte<br />del Relax</h1>
          <p style={{ maxWidth: 700, margin: '0 auto 40px', color: '#666', fontSize: '1.2rem' }}>
            Imperial House non è solo un bed & breakfast. È un'esperienza di lusso, privacy e cura dei dettagli, progettata per rigenerare corpo e mente a due passi dalla storia.
          </p>
          <Link to="/struttura" className="btn-primary">Esplora la Suite</Link>
        </div>
      </section>

      {/* Structure Info Section (Home) */}
      <section style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="slide-up">
              <span className="eyebrow">La Nostra Proprietà</span>
              <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Un Rifugio Privato, Pensato per Te.</h2>
              <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
                La struttura dell'Imperial House si sviluppa come un unico, imponente spazio privato. Non condividerai gli ambienti con altri ospiti: l'intera suite, la sauna privata e il godibile balcone saranno a tua esclusiva disposizione.
              </p>
              <Link to="/struttura" style={{ color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', fontWeight: 500 }}>
                Vedi le foto <ChevronRight size={16} />
              </Link>
            </div>
            <div className="slide-up delay-200">
              <img src="/5996594491156008945.jpg" alt="Letto Imperial House" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center' }} className="slide-up">
            <span className="eyebrow">Dettagli & Servizi</span>
            <h2 className="section-title">I Tuoi Vantaggi Esclusivi</h2>
          </div>
          <div className="service-grid">
            <div className="service-card slide-up delay-100">
              <div className="service-icon"><Bed size={40} strokeWidth={1} /></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Privacy Totale</h3>
              <p style={{ color: '#666' }}>L'intera proprietà è per te. Nessuno spazio in condivisione, per garantirti il massimo del relax e della libertà.</p>
            </div>
            <div className="service-card slide-up delay-200">
              <div className="service-icon"><Wine size={40} strokeWidth={1} /></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Design & Comfort</h3>
              <p style={{ color: '#666' }}>Cucina moderna attrezzata, ampi spazi, e illuminazione d'atmosfera. Sentiti coccolato come in una suite a cinque stelle.</p>
            </div>
            <div className="service-card slide-up delay-300">
              <div className="service-icon"><Map size={40} strokeWidth={1} /></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Posizione Strategica</h3>
              <p style={{ color: '#666' }}>Respira l'aria di Pompei e raggiungi rapidamente la Costiera Amalfitana, Napoli o Sorrento con estrema facilità.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Territorio Mini-Section */}
      <section style={{ background: '#f5f5f0' }}>
        <div className="container slide-up" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Il Territorio</span>
          <h2 className="section-title">Esplora I Dintorni</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 40px', color: '#666', fontSize: '1.2rem' }}>
            Situata strategicamente a Scafati (in Via Bonifica 169), Imperial House è il punto di partenza perfetto per visitare gli Scavi di Pompei, la Penisola Sorrentina e Napoli.
          </p>
          <Link to="/territorio" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            Scopri Cosa Fare <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Struttura Page (Real Photos)
const Struttura = () => (
  <div className="page-wrapper">
    <section className="page-header slide-up">
      <div className="container">
        <span className="eyebrow">Gli Ambienti</span>
        <h1 className="section-title">Eleganza in Ogni Spazio</h1>
        <p style={{ maxWidth: 700, margin: '0 auto', color: '#666' }}>
          Esplora la nostra ampia suite. Forme armoniose e un'atmosfera da mille e una notte, il tutto condito da servizi introvabili come una sauna privata ad uso esclusivo.
        </p>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="container">

        {/* Main Suite Showcase */}
        <div style={{ position: 'relative', marginBottom: '80px' }} className="slide-up">
          <img src="/5996594491156008931.jpg" alt="La Suite Principale" style={{ width: '100%', height: '70vh', objectFit: 'cover' }} />
          <div style={{ background: '#fff', padding: '40px', maxWidth: '500px', margin: '-80px auto 0', position: 'relative', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>La Suite Principale</h3>
            <p style={{ color: '#666' }}>Un ampio letto matrimoniale in ferro battuto, sistema avanzato di illuminazione emozionale e arredi raffinati in un candido bianco.</p>
          </div>
        </div>

        {/* Sauna Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
          <div className="slide-up">
            <img src="/5996594491156008955.jpg" alt="Sauna Privata" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>
          <div className="slide-up delay-200">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Sauna e Area Relax</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '20px' }}>Il vero gioiello di Imperial House: una sauna ad infrarossi ad uso totalmente privato e gratuito, posizionata ad un passo dal letto e circondata da luci emozionali per un'immersione rigenerante.</p>
            <ul style={{ listStyle: 'none', color: '#666' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><Check size={18} color="#D4AF37" /> Cabina Sauna Privata</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><Check size={18} color="#D4AF37" /> Luci di Cromoterapia Regolabili</li>
            </ul>
          </div>
        </div>

        {/* Breakfast Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
          <div className="slide-up delay-100" style={{ order: 2 }}>
            <img src="/5996594491156008947.jpg" alt="Colazione Ricca" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>
          <div className="slide-up" style={{ order: 1 }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Il Risveglio Perfetto</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '20px' }}>Offriamo un assortimento completo di prelibatezze confezionate di alta qualità. Tè, caffè, marmellate e croissant sono sempre a tua disposizione in ogni momento della giornata, non solo al risveglio.</p>
            <ul style={{ listStyle: 'none', color: '#666' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><Check size={18} color="#D4AF37" /> Angolo Bevande e Bollitore</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><Check size={18} color="#D4AF37" /> Snell e Veloce (Totalmente Gratuito)</li>
            </ul>
          </div>
        </div>

        {/* Balcony Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px', alignItems: 'center' }}>
          <div className="slide-up">
            <img src="/5996594491156008946.jpg" alt="Balcone" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>
          <div className="slide-up delay-200">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Il Tuo Balcone</h3>
            <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '20px' }}>Un comodo balconcino arredato con tavolino e sedute per godersi la colazione all'aria aperta. Goditi uno scorcio iconico sul Polo Commerciale "La Cartiera", proprio di fronte la struttura.</p>
            <ul style={{ listStyle: 'none', color: '#666' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><Check size={18} color="#D4AF37" /> Aria Aperta Spaziosa</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}><Check size={18} color="#D4AF37" /> Tavolino Breakfast</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </div>
);

// Territorio (Dintorni) Page
const Territorio = () => (
  <div className="page-wrapper">
    <section className="page-header slide-up">
      <div className="container">
        <span className="eyebrow">La Nostra Posizione</span>
        <h1 className="section-title">Scopri il Territorio</h1>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="container">

        {/* Pompei Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 60, alignItems: 'center', marginBottom: '100px' }}>
          <div className="slide-up">
            <span className="eyebrow" style={{ color: '#0A0A0A' }}>Archeologia</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Scavi di Pompei</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Alloggiando all'Imperial House a Scafati non scegli solo la tranquillità, ma ottieni un accesso privilegiato al <strong>Parco Archeologico di Pompei</strong>, celebre in tutto il mondo.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.8 }}>
              A soli 5-10 minuti di distanza, potrai passeggiare letteralmente nella storia dell'Impero Romano. Sei abbastanza vicino per essere tra i primi ad entrare al mattino, evitando le folle!
            </p>
          </div>
          <div className="photo-item slide-up delay-200">
            <img src="/pompei.jpg" alt="Pompei Ruins" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Other Locations Carousel / Grid */}
        <div style={{ background: '#fff', padding: '80px', border: '1px solid rgba(0,0,0,0.05)' }} className="slide-up">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="eyebrow">Da Non Perdere</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Le Bellezze della Campania</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginTop: '60px', textAlign: 'left' }}>

            <div>
              <img src="/sorrento.jpg" style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '20px' }} alt="Sorrento" />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Sorrento & Costiera</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Raggiungi in soli 30-40 minuti i pittoreschi villaggi sul mare e le scogliere a picco della Costiera Sorrentina e Amalfitana.</p>
            </div>

            <div>
              <img src="/napoli.jpg" style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '20px' }} alt="Napoli" />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Centro di Napoli</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>A circa 30 minuti d'auto. Immergiti nel fascino caotico ed affascinante di Spaccanapoli, piazza del Plebiscito e la pizza più buona al mondo.</p>
            </div>

            <div>
              <img src="/vesuvio.jpg" style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '20px' }} alt="Vesuvio" />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Parco del Vesuvio</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>A pochi km dalla nostra struttura. Un sentiero escursionistico mozzafiato fino all'orlo del cratere del vulcano più iconico al mondo.</p>
            </div>

            <div>
              <img src="/caserta.jpg" style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '20px' }} alt="Reggia di Caserta" />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Reggia di Caserta</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Visita la stupefacente residenza reale paragonabile a Versailles, con immensi giardini e fontane monumentali, a soli 45 minuti d'auto.</p>
            </div>

            <div>
              <img src="/capri.jpg" style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '20px' }} alt="Capri" />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Capri & Ischia</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Tramite facili collegamenti da Sorrento o Napoli centro, le magnifiche isole del golfo offrono gite giornaliere indimenticabili.</p>
            </div>

            <div>
              <img src="/paestum.jpg" style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '20px' }} alt="Paestum" />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Templi di Paestum</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Spostandoti verso Sud potrai visitare rovine Magna-Greche impressionanti e gustare la vera mozzarella di Bufala campana locale DOP.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  </div>
);

// Contatti Page
const Contatti = () => (
  <div className="page-wrapper" style={{ height: '100vh', display: 'flex', alignItems: 'center', background: '#fff' }}>
    <div className="container slide-up" style={{ textAlign: 'center' }}>
      <span className="eyebrow">Prenotazioni & Info</span>
      <h1 className="section-title">Inizia il Tuo Soggiorno</h1>
      <p style={{ color: '#666', fontSize: '1.2rem', margin: '0 auto 40px', maxWidth: 500 }}>
        Per le migliori tariffe, disponibilità e richieste speciali, contattaci direttamente ai nostri recapiti.
      </p>
      <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 20 }}>
        <button className="btn-primary">info@imperialhouse.it</button>
        <button className="btn-primary" style={{ background: '#D4AF37', color: '#000' }}>+39 333 000 0000</button>
      </div>

      <div style={{ marginTop: '80px' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Dove Siamo</h3>
        <p style={{ color: '#666' }}>Via Bonifica 169, 84018 Scafati (SA), Campania - Italia</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/struttura" element={<Struttura />} />
        <Route path="/territorio" element={<Territorio />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
