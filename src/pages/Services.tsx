import { Link } from 'react-router-dom';

const services = [
  {
    title: 'High-Converting Service Websites',
    description: 'Modern landing pages optimized to turn visitors into leads for local service businesses.',
    badge: 'Web Design'
  },
  {
    title: 'Local SEO & Google Visibility',
    description: 'SEO structure, keyword focus, and local search optimization to get found by nearby customers.',
    badge: 'SEO'
  },
  {
    title: 'Lead Capture Funnels',
    description: 'Clear paths to capture contact requests, quote forms, and appointment bookings.',
    badge: 'Funnels'
  },
  {
    title: 'Conversion-Focused Copy',
    description: 'Benefit-led storytelling, compelling calls to action, and persuasive messaging that sells.',
    badge: 'Copywriting'
  },
  {
    title: 'Fast Launch System',
    description: 'Launch in days with our proven process — no months of delays, no project fatigue.',
    badge: 'Speed'
  },
  {
    title: 'Analytics & Performance Optimization',
    description: 'Clear performance tracking and continuous improvement for better ROI over time.',
    badge: 'Analytics'
  }
];

function Services() {
  return (
    <div className="bg-slate-50">
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex rounded-full bg-brand/10 px-4 py-1 text-sm font-semibold text-brand">
                Services
              </div>
              <h1 className="mt-6 text-4xl font-bold text-slate-950 sm:text-5xl">
                Services Designed to Grow Local Businesses
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Every service is built around speed, conversion, and lead generation so your website becomes your best salesperson.
              </p>
              <Link
                to="/book"
                className="mt-10 inline-flex items-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-slate-900"
              >
                Book Your Strategy Call
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <article key={service.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {service.badge}
                  </span>
                  <h2 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h2>
                  <p className="mt-4 text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Portfolio</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Websites built to grow service businesses</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Browse a sample of our work and see the kind of polished, conversion-first sites we create for local brands.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <article key={index} className="group overflow-hidden rounded-3xl bg-white shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src="https://assets.ls-assets.com/uploads/7444f86a-574a-4dd4-be57-ea2f91c183eb/d0dd0610-eb3a-495e-80d5-7801a27f88e9.webp?w=768"
                    alt="Portfolio sample"
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Local Business
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-950">Conversion-Focused Landing Page</h2>
                  <p className="mt-4 text-slate-600">
                    Designed to highlight services, collect leads, and help local brands convert visitors into customers.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-brand/20 px-4 py-1 text-sm font-semibold text-brand">
                How It Works
              </span>
              <h2 className="mt-6 text-4xl font-bold">A Simple Process Built Around Speed and Impact</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Start with a discovery call, approve the strategy, and launch a website that is built to convert.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Discover', text: 'We review your business, customers, and goals so every page is focused on conversions.' },
                { title: 'Build', text: 'We create a fast, mobile-optimized website with strong messaging and modern design.' },
                { title: 'Launch', text: 'We launch quickly and help you capture leads immediately with analytics and tracking.' }
              ].map((step) => (
                <div key={step.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-brand">{step.title}</p>
                  <p className="mt-3 text-lg leading-7 text-slate-200">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
              Core Services
            </div>
            <h2 className="mt-6 text-3xl font-bold text-slate-950 sm:text-4xl">
              What We Deliver for Every Website
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Every project includes the experience, design, copy, and launch support needed to turn your website into a customer-generation engine.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                  {service.badge}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-9 py-4 text-base font-semibold text-white shadow-xl shadow-brand/20 transition hover:bg-slate-900"
            >
              Schedule a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
