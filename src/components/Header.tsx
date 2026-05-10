import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CalendlyButton } from './CalendlyButton'; // Ensure this file exists in your components folder
import danexlogo from '../images/danexlogo.webp';

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'FAQ', to: '/faq' }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm">
      {/* LAYOUT CONTAINER 
          'flex justify-between' keeps Logo on left and Nav/Button on right.
          'items-center' keeps them perfectly aligned vertically.
      */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LOGO SECTION */}
        <NavLink to="/" className="inline-flex items-center gap-3">
          <img
            src={danexlogo}
            alt="Danex Digital"
            className="h-10 w-auto object-contain"
          />
        </NavLink>

        {/* DESKTOP NAVIGATION (Hidden on mobile) */}
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

        {/* DESKTOP CTA BUTTON (Hidden on mobile) */}
        <div className="hidden lg:block">
          <CalendlyButton
            className="inline-flex flex-col items-center rounded-[10px] bg-brand px-7 py-2 text-white shadow-xl shadow-brand/20 transition hover:bg-slate-900"
          >
            <span className="text-sm font-bold tracking-wide">See How It Works</span>
            <span className="text-[10px] font-normal opacity-90 uppercase tracking-widest">Free 5-Minute Demo</span>
          </CalendlyButton>
        </div>

        {/* MOBILE MENU TOGGLE (Hidden on desktop) */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Swaps icon based on state */}
          <span className="text-2xl leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                    isActive ? 'bg-brand/10 text-brand' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Mobile CTA Button */}
            <CalendlyButton
              onOpen={() => setOpen(false)}
              className="mt-2 flex flex-col items-center justify-center rounded-2xl bg-brand px-5 py-4 text-white shadow-lg"
            >
              <span className="text-base font-bold">See How It Works</span>
              <span className="text-xs opacity-80">Free 5-Minute Demo</span>
            </CalendlyButton>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;