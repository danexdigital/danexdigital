import { NavLink } from 'react-router-dom';
import { CalendlyButton } from './CalendlyButton';
import danexlogo from '../images/danexlogo.webp';

const quickLinks = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Services', to: '/services' }
];

const calendlyUrl = 'https://calendly.com/danexdigitalservices/30min';

const resources = [
  { label: 'FAQ', to: '/faq' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <NavLink to="/" className="inline-flex items-center gap-3">
              <img
                src={danexlogo}
                alt="Danex Digital"
                className="h-10 w-auto object-contain"
              />
            </NavLink>
            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">
              Building websites that drive real growth for local service businesses with speed, focus, and results.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/danexdigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 transition hover:bg-brand"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-slate-100"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink className="text-slate-300 transition hover:text-white" to={link.to}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Resources</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {resources.map((link) => (
                <li key={link.label}>
                  <a className="text-slate-300 transition hover:text-white" href={link.to}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Ready to Start?</h3>
            <p className="mt-6 text-sm leading-6 text-slate-400">
              Let's discuss how we can help grow your business with a high-converting website.
            </p>
            <p className="mt-4 text-sm text-slate-300">
              Email us at <a href="mailto:danexdigitalservices@gmail.com" className="text-white hover:text-brand">danexdigitalservices@gmail.com</a>
            </p>
            <CalendlyButton
              className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              Book a Free Call
            </CalendlyButton>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Danex Digital. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            <NavLink to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="transition hover:text-white">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
