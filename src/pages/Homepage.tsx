import { Link } from 'react-router-dom';

const stats = [
  { label: 'Years Exp', value: '5+' },
  { label: 'Satisfaction', value: '100%' }
];

function Homepage() {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-slate-100 via-white to-slate-50 pb-20 pt-28 lg:pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute top-1/2 -left-28 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                For Local Service Businesses
              </div>
              <h1 className="mt-8 text-4xl font-bold text-slate-950 sm:text-5xl lg:text-6xl">
                We Build{' '}
                <span className="bg-gradient-to-r from-brand to-violet-500 bg-clip-text text-transparent">
                  High-Converting
                </span>{' '}
                Websites
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                More customers, leads, and sales with fast, proven websites designed to actually grow your business — not just look good.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-slate-900"
                >
                  Book a Free Strategy Call
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="mt-10 flex flex-col items-center gap-6 text-sm text-slate-600 sm:flex-row sm:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  No Setup Fee
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  1 Week Turnaround
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2205982417.jpg?w=1200"
                  alt="Web UI-UX design concept"
                  className="h-[540px] w-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 rounded-3xl bg-emerald-500 px-6 py-5 text-white shadow-xl">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm uppercase tracking-[0.18em]">Years Exp</div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-brand px-6 py-5 text-white shadow-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm uppercase tracking-[0.18em]">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-600">
                Traditional Approach
              </div>
              <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Most Custom Websites Are:</h2>
              <div className="space-y-4">
                {['Expensive', 'Slow to launch', 'Overcomplicated', 'Built without results in mind'].map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                      ✓
                    </div>
                    <span className="text-lg font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 rounded-[32px] bg-gradient-to-br from-brand to-violet-500 p-8 shadow-2xl text-white sm:p-10">
              <div className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold text-white">
                The Danex Way
              </div>
              <h2 className="text-3xl font-bold">You Don't Need a "Fancy" Website.</h2>
              <p className="text-lg leading-8 text-white/80">
                You need a website that actually gets you results. That's exactly what we build.
              </p>
              <div className="space-y-4">
                {['Gets you leads', 'Turns visitors into customers', 'Helps your business grow'].map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-3xl border border-white/20 bg-white/10 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white">
                      ✓
                    </div>
                    <span className="text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
              Speed Advantage
            </div>
            <h2 className="mt-6 text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">
              Launch in Days — Not Months
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              While others are still waiting for their website to be built, you'll already be generating leads.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-rose-200 bg-white p-8 shadow-xl">
              <div className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-700">
                The Traditional Way
              </div>
              <div className="mt-8 space-y-6">
                {[
                  { title: 'Takes weeks or months', subtitle: 'Endless back-and-forth with developers' },
                  { title: 'Expensive development', subtitle: 'Custom builds cost thousands' },
                  { title: 'Endless revisions', subtitle: 'Months of tweaks and changes' },
                  { title: 'Confusing process', subtitle: 'Unclear timelines and deliverables' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                      ✕
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-6 text-rose-600">
                <span className="text-2xl">⏱</span>
                <span className="font-semibold">Weeks to Months</span>
              </div>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-brand to-violet-500 p-8 text-white shadow-2xl">
              <div className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold text-white">
                The Danex Digital Way
              </div>
              <div className="mt-8 space-y-6">
                {[
                  { title: 'Fast turnaround', subtitle: 'Launch in just a few days' },
                  { title: 'Proven system', subtitle: 'Pre-built, optimized framework' },
                  { title: 'Simple process', subtitle: 'Clear steps, no confusion' },
                  { title: 'Ready to grow', subtitle: 'Start getting leads immediately' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-6 text-white">
                <span className="text-2xl">⚡</span>
                <span className="font-bold text-lg">Days, Not Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-brand/20 px-4 py-1 text-sm font-semibold text-brand">
              Our Work
            </div>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Websites We've Built for Our Clients
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              High-converting websites designed to grow local service businesses.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              { tag: 'Local Service Business', title: 'Conversion-Focused Design', subtitle: 'Lead generation optimized layouts' },
              { tag: 'Service Industry', title: 'Mobile-First Approach', subtitle: 'Perfect on every device' },
              { tag: 'Home Services', title: 'Brand-Aligned Design', subtitle: 'Professional, trustworthy presence' },
              { tag: 'Professional Services', title: 'SEO-Optimized Structure', subtitle: 'Built to rank and get found' }
            ].map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                    src="https://assets.ls-assets.com/uploads/7444f86a-574a-4dd4-be57-ea2f91c183eb/d0dd0610-eb3a-495e-80d5-7801a27f88e9.webp?w=768"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-flex rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      {item.tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-200">{item.subtitle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
            >
              <span>View Our Services</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200/80 bg-slate-50 p-10 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Zero Risk Guarantee
            </div>
            <h2 className="mt-6 text-3xl font-bold text-slate-950 sm:text-4xl">
              We Don't Charge You Anything Upfront
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              You only pay when you're happy with the result. No risk. No pressure. No hidden terms.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'No upfront fees',
                'No long-term contracts',
                'No wasted money',
                'No stress'
              ].map((line) => (
                <div key={line} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 text-slate-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">✕</div>
                  <span>{line}</span>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-8 flex max-w-xs items-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500 text-white">✓</div>
              <div className="text-left">
                <p className="font-semibold text-slate-950">Just Results</p>
                <p className="text-sm text-slate-600">That grow your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
            Ready to Grow?
          </div>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's Build a Website That Grows Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Book a free call and we'll walk you through exactly how we can help you get more leads and customers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-brand px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-brand/30 transition hover:bg-slate-900"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {['100% Free, No Obligation', '30-Min Call', 'Pay Only When Happy'].map((item) => (
              <div key={item} className="inline-flex items-center gap-2">
                <span className="text-brand">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
