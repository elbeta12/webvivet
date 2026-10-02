'use client'

import { useState } from 'react'
import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Download,
  Globe2,
  MessageCircle,
  ExternalLink,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.ico-nOlFgd32E5E6MT7Q5d8BeaC7FN1UxC.x-icon'

type Language = 'ES' | 'EN'

const copy = {
  ES: {
    nav: ['Características', 'Versiones', 'Capturas', 'Preguntas'],
    badge: 'Instalador oficial',
    title: 'Tu experiencia, más rápida.',
    titleAccent: 'Más Vivet.',
    intro: 'Vivet Client reúne todo lo que necesitas para jugar Haxball.',
    download: 'Descargar ahora',
    seeVersions: 'Ver versiones',
    compatible: 'Compatible con Windows 7, 8, 10 y 11',
    trusted: 'Instalación segura y verificada',
    sectionEyebrow: 'Por qué Vivet Client',
    sectionTitle: 'Simple por fuera. Potente por dentro.',
    sectionText: 'Diseñado para que instales, configures y disfrutes sin complicaciones.',
    features: [
      ['Rendimiento optimizado', 'Consume pocos recursos para que tu equipo siga volando.', Zap],
      ['Instalación segura', 'Archivos verificados y un proceso claro de principio a fin.', ShieldCheck],
      ['Listo para usar', 'Descarga, instala y empieza. Sin configuraciones innecesarias.', Sparkles],
    ],
    versionsEyebrow: 'Elige tu versión',
    versionsTitle: 'Encuentra la descarga correcta',
    versionsText: 'Descarga la edición adecuada para tu arquitectura de Windows.',
    historyEyebrow: 'Historial de versiones',
    historyTitle: 'Cambios claros en cada actualización.',
    screenshotsEyebrow: 'Vivet Client en acción',
    screenshotsTitle: 'Capturas del cliente',
    screenshotsText: 'Una vista rápida de las salas, amigos y mapas disponibles en Haxball.',
    popular: 'RECOMENDADA',
    install: 'Descargar',
    details: 'Detalles',
    guide: '¿No sabes qué versión elegir?',
    guideLink: 'Ver guía de compatibilidad',
    discord: 'Únete a Discord',
    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Todo claro antes de instalar.',
    faqs: [
      ['¿Qué versión de Windows necesito?', 'Vivet Client funciona en Windows 7, Windows 8, Windows 10 y Windows 11. Elige la descarga según la arquitectura de tu sistema. Windows 10/11 usa la edición de 64 bits y Windows 7/8 la de 32 bits.'],
      ['¿La aplicación es gratuita?', 'Sí. La descarga y las funciones principales de Vivet Client son completamente gratuitas.'],
      ['¿Cómo sé si mi sistema es de 32 o 64 bits?', 'Abre Configuración, entra en Sistema y luego en Acerca de. Allí verás el tipo de sistema de tu equipo.'],
    ],
    footer: 'Hecho para que todo funcione mejor.',
  },
  EN: {
    nav: ['Features', 'Versions', 'Screenshots', 'Questions'],
    badge: 'Official installer · v2.4.0',
    title: 'Your experience, faster.',
    titleAccent: 'More Vivet.',
    intro: 'Vivet Client brings everything you need into a lightweight, stable app that is ready for your PC.',
    download: 'Download now',
    seeVersions: 'View versions',
    compatible: 'Compatible with Windows 7, 8, 10 and 11',
    trusted: 'Secure and verified installation',
    sectionEyebrow: 'Why Vivet Client',
    sectionTitle: 'Simple on the outside. Powerful within.',
    sectionText: 'Built so you can install, configure and enjoy without the hassle.',
    features: [
      ['Optimized performance', 'Uses very few resources so your computer keeps flying.', Zap],
      ['Secure installation', 'Verified files and a clear process from start to finish.', ShieldCheck],
      ['Ready to use', 'Download, install and get started. No unnecessary setup.', Sparkles],
    ],
    versionsEyebrow: 'Choose your version',
    versionsTitle: 'Find the right download',
    versionsText: 'Download the edition that matches your Windows architecture.',
    historyEyebrow: 'Version history',
    historyTitle: 'Clear changes in every update.',
    screenshotsEyebrow: 'Vivet Client in action',
    screenshotsTitle: 'Client screenshots',
    screenshotsText: 'A quick look at the rooms, friends and maps available in Haxball.',
    popular: 'RECOMMENDED',
    install: 'Download',
    details: 'Details',
    guide: 'Not sure which version to choose?',
    guideLink: 'View compatibility guide',
    discord: 'Join Discord',
    faqEyebrow: 'Frequently asked questions',
    faqTitle: 'Everything clear before you install.',
    faqs: [
      ['Which Windows version do I need?', 'Vivet Client works on Windows 7, Windows 8, Windows 10 and Windows 11. Choose the download based on your system architecture.'],
      ['Is the app free?', 'Yes. The download and core features of Vivet Client are completely free.'],
      ['How do I know if my system is 32 or 64-bit?', 'Open Settings, go to System and then About. You will see your computer system type there.'],
    ],
    footer: 'Made to make everything work better.',
  },
} as const

const versions = [
  { name: 'Windows 10 / 11', meta: '64 bits', note: 'La opción recomendada para equipos actuales', tag: 'Más descargada', file: '/downloads/vivet-setup-64bits.exe' },
  { name: 'Windows 7 / 8', meta: '32 bits', note: 'Para sistemas clásicos y ligeros', tag: 'Compatible', file: '/downloads/vivet-setup-32bits.exe' },
]

export default function Page() {
  const [language, setLanguage] = useState<Language>('ES')
  const [dark, setDark] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null)
  const t = copy[language]

  return (
    <main className={dark ? 'site-shell dark' : 'site-shell'}>
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Vivet Client home">
          <img src={logoUrl} alt="Logo de Vivet Client" className="brand-logo" />
          <span>Vivet <b>Client</b></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#features">{t.nav[0]}</a><a href="#versions">{t.nav[1]}</a><a href="#screenshots">{t.nav[2]}</a><a href="#faq">{t.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>{dark ? <Sun /> : <Moon />}</button>
          <button className="language-button" onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')} aria-label="Cambiar idioma"><Globe2 /> {language}<ChevronDown /></button>
          <a className="discord-button" href="https://discord.gg/2GKwg6gGfP" target="_blank" rel="noreferrer"><MessageCircle /> {t.discord}<ExternalLink /></a>
          <a className="header-download" href="#versions">{t.download}<ArrowRight /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> {t.badge}</div>
          <h1>{t.title}<br /><span>{t.titleAccent}</span></h1>
          <p>{t.intro}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#versions"><Download /> {t.download}</a>
            <a className="text-button" href="#features">{t.seeVersions} <ArrowRight /></a>
          </div>
          <div className="trust-row"><span><Check /> {t.compatible}</span><span><ShieldCheck /> {t.trusted}</span></div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="halo halo-one" /><div className="halo halo-two" />
          <div className="app-card">
            <div className="app-card-top"><span className="window-dots"><i /><i /><i /></span><span>Vivet Client</span><span className="live-dot" /></div>
            <div className="app-card-body"><img src={logoUrl} alt="" /><div><span className="mini-label">CLIENT STATUS</span><strong>Ready to launch</strong><div className="progress"><span /></div></div></div>
            <div className="app-card-foot"><span>Windows compatible</span><span>v2.4.0</span></div>
          </div>
          <div className="floating-chip chip-top"><Zap /> <span><b>Fast setup</b><small>Under 2 minutes</small></span></div>
          <div className="floating-chip chip-bottom"><ShieldCheck /> <span><b>Verified</b><small>Safe installer</small></span></div>
        </div>
      </section>

      <section className="features-section" id="features"><div className="section-heading"><div><p className="section-eyebrow">{t.sectionEyebrow}</p><h2>{t.sectionTitle}</h2></div><p>{t.sectionText}</p></div><div className="feature-grid">{t.features.map(([title, text, Icon]) => <article className="feature-card" key={title}><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{text}</p><ArrowRight className="feature-arrow" /></article>)}</div></section>

      <section className="versions-section" id="versions"><div className="section-heading centered"><p className="section-eyebrow">{t.versionsEyebrow}</p><h2>{t.versionsTitle}</h2><p>{t.versionsText}</p></div><div className="version-list">{versions.map((version, index) => <article className={`version-card ${index === 0 ? 'featured' : ''}`} key={version.name}><div className="version-number">0{index + 1}</div><div className="version-info"><div className="version-name-row"><h3>{version.name}</h3>{index === 0 && <span className="recommendation">{t.popular}</span>}</div><p>{version.note}</p><span className="version-meta">{version.meta} <span>·</span> .exe <span>·</span> 38 MB</span></div><a href={version.file} className="download-version" download>{t.install} <ArrowDownToLine /></a><button className="details-button" aria-label={`${t.details}: ${version.name}`}><CircleHelp /></button></article>)}</div><div className="guide-line"><span>{t.guide}</span><a href="#faq">{t.guideLink} <ArrowRight /></a></div></section>

      <section className="history-section"><div className="section-heading"><div><p className="section-eyebrow">{t.historyEyebrow}</p><h2>{t.historyTitle}</h2></div><p>Vivet Client evoluciona con mejoras de compatibilidad, rendimiento y estabilidad.</p></div><div className="history-list"><article><strong>v2.4.0</strong><span>Actual</span><p>Compatibilidad con Windows 10/11 de 64 bits y mejoras generales para Haxball.</p></article><article><strong>v2.3.0</strong><span>Anterior</span><p>Instalador optimizado para Windows 7/8 de 32 bits y ajustes de rendimiento.</p></article><article><strong>v2.0.0</strong><span>Base</span><p>Primera versión pública de Vivet Client con instalación simplificada.</p></article></div></section>

      <section className="screenshots-section" id="screenshots"><div className="section-heading"><div><p className="section-eyebrow">{t.screenshotsEyebrow}</p><h2>{t.screenshotsTitle}</h2></div><p>{t.screenshotsText}</p></div><div className="screenshot-grid"><button className="screenshot-card" onClick={() => setSelectedScreenshot('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VnkstYTFAKj83MhydG6x4hv3WSpnDF.png')}><figure><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VnkstYTFAKj83MhydG6x4hv3WSpnDF.png" alt="Salas de Haxball en Vivet Client" /><figcaption>Explora salas y conéctate a partidas.</figcaption></figure></button><button className="screenshot-card" onClick={() => setSelectedScreenshot('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sas5BtSfz9METdfu43s8dCMGhEEjfj.png')}><figure><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sas5BtSfz9METdfu43s8dCMGhEEjfj.png" alt="Sección social de Vivet Client" /><figcaption>Gestiona amigos y solicitudes.</figcaption></figure></button><button className="screenshot-card" onClick={() => setSelectedScreenshot('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RiYuGvgEsS1VaSXBigwUPgdvZkbxdL.png')}><figure><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RiYuGvgEsS1VaSXBigwUPgdvZkbxdL.png" alt="Mapas de Haxball en Vivet Client" /><figcaption>Descubre mapas para tus partidas.</figcaption></figure></button></div></section>

      <section className="analytics-section"><div className="section-heading"><div><p className="section-eyebrow">Analíticas de descargas</p><h2>Elige la versión más usada.</h2></div><p>Resumen visual de las descargas del instalador durante los últimos 30 días.</p></div><div className="analytics-grid"><article><span>Total de descargas</span><strong>1.248</strong><small>+18,4% este mes</small></article><article><span>Windows 10 / 11 · 64 bits</span><strong>78%</strong><div className="bar"><i style={{ width: '78%' }} /></div></article><article><span>Windows 7 / 8 · 32 bits</span><strong>22%</strong><div className="bar"><i style={{ width: '22%' }} /></div></article></div></section>

      <section className="faq-section" id="faq"><div className="faq-intro"><p className="section-eyebrow">{t.faqEyebrow}</p><h2>{t.faqTitle}</h2><div className="faq-mark">?</div></div><div className="faq-list">{t.faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      {selectedScreenshot && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Captura ampliada" onClick={() => setSelectedScreenshot(null)}><button className="lightbox-close" onClick={() => setSelectedScreenshot(null)} aria-label="Cerrar captura">×</button><img src={selectedScreenshot} alt="Captura ampliada de Vivet Client" onClick={(event) => event.stopPropagation()} /></div>}

      <footer><div className="footer-brand"><img src={logoUrl} alt="Logo de Vivet Client" /><span>Vivet <b>Client</b></span></div><p>{t.footer}</p><a className="discord-button" href="https://discord.gg/2GKwg6gGfP" target="_blank" rel="noreferrer"><MessageCircle /> {t.discord}<ExternalLink /></a><span className="copyright">© 2026 Vivet Client</span></footer>
    </main>
  )
}
