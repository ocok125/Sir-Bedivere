import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/munan-logo-joyHVxvcutqu3jJN4mvo3x.webp';

const navLinks = [
  { label: '首頁', href: '#hero' },
  { label: '關於我們', href: '#about' },
  { label: '服務優勢', href: '#services' },
  { label: '合作流程', href: '#process' },
  { label: '合作平台', href: '#platforms' },
  { label: '客戶見證', href: '#testimonials' },
  { label: '收益成效', href: '#income' },
  { label: 'FAQ', href: '#faq' },
  { label: '聯絡我們', href: '#contact' },
];

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // 滾動偵測：更新 scrolled + activeSection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // 找出目前可見的 section
      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,252,248,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px oklch(0.72 0.09 30 / 0.08)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <button
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-3 group"
          >
            <img
              src={LOGO_URL}
              alt="木南國際貿易 Logo"
              className="w-12 h-12 object-contain rounded-lg transition-transform duration-250 group-hover:scale-105"
              style={{ filter: 'drop-shadow(0 2px 6px oklch(0.72 0.09 30 / 0.25))' }}
            />
            <div className="hidden sm:block text-left">
              <div
                className="text-sm font-bold leading-tight"
                style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}
              >
                木南國際貿易
              </div>
              <div className="text-xs tracking-wider" style={{ color: 'oklch(0.55 0.03 55)' }}>
                MUNAN TRADING CO., LTD.
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="relative px-2.5 py-2 text-xs rounded-md transition-all duration-200 whitespace-nowrap"
                  style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    color: isActive ? 'oklch(0.62 0.10 30)' : 'oklch(0.35 0.03 55)',
                    fontWeight: isActive ? 700 : 500,
                    background: isActive ? 'oklch(0.72 0.09 30 / 0.08)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.72 0.09 30 / 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  }}
                >
                  {link.label}
                  {/* Active 底部指示線 */}
                  <span
                    className="absolute bottom-0 left-1/2 h-0.5 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, oklch(0.72 0.09 30), oklch(0.82 0.10 75))',
                      width: isActive ? '80%' : '0%',
                      transform: 'translateX(-50%)',
                      transition: 'width 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary text-sm"
              style={{ padding: '0.5rem 1.25rem' }}
            >
              立即合作
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'oklch(0.35 0.03 55)' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '600px' : '0',
          background: 'rgba(255,252,248,0.98)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="container pb-6">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left py-3 px-2 border-b text-sm transition-all duration-200 hover:pl-4"
                style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  color: isActive ? 'oklch(0.62 0.10 30)' : 'oklch(0.35 0.03 55)',
                  fontWeight: isActive ? 700 : 400,
                  borderColor: 'oklch(0.90 0.02 75)',
                  transitionDelay: menuOpen ? `${i * 30}ms` : '0ms',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-12px)',
                }}
              >
                {isActive && (
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mr-2 mb-0.5"
                    style={{ background: 'oklch(0.72 0.09 30)' }}
                  />
                )}
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNav('#contact')}
            className="btn-primary w-full mt-4 text-sm text-center"
          >
            立即合作
          </button>
        </div>
      </div>
    </nav>
  );
}
