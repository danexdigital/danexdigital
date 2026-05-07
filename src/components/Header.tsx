import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="inline-flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-brand text-white grid place-items-center font-bold shadow-brand">
            D
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] uppercase text-slate-700">Danex Digital</p>
            <p className="text-xs text-slate-500">Local business websites</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive ? 'text-brand' : 'text-slate-700 hover:text-brand'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <NavLink
            to="/book"
            className="inline-flex items-center rounded-[28px] bg-brand px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/20 transition hover:bg-slate-900"
          >
            Get My Free Strategy Call
          </NavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 px-4 py-5 shadow-sm">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-brand/10 text-brand' : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/book"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/15"
            >
              Get My Free Strategy Call
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
