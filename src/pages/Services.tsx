import { Link } from 'react-router-dom';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

const comparisonData = [
  {
    other: "Expensive startup fee + monthly recurring fee",
    pait: "No startup fee + low monthly fee",
  },
  {
    other: "2-4 month turnaround",
    pait: "5-7 day turnaround",
  },
  {
    other: "Basic contact form",
    pait: "Advanced contact form with text notifications + followup automations",
  },
  {
    other: "No lead management capabilities",
    pait: "Track traffic, leads and customers all from your site dashboard",
  },
];

export function ComparisonCard() {
  return (
    <div className="mx-auto max-w-4xl rounded-[32px] bg-[#1a1a1a] p-8 text-white shadow-2xl sm:p-12">
      {/* Header Row */}
      <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-10">
        <h3 className="text-xl font-bold uppercase tracking-wider text-slate-400 sm:text-2xl">
          Other Design Agencies
        </h3>
        <div className="flex items-center gap-2">
          {/* Replace with your actual Logo SVG or Image */}
          <span className="text-3xl font-bold text-white underline decoration-brand">
            Danex Digital
          </span>
        </div>
      </div>

      {/* Comparison Rows */}
      <div className="divide-y divide-white/10">
        {comparisonData.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-8 py-8">
            {/* "Other" Column */}
            <div className="flex items-start gap-3">
              <XMarkIcon className="mt-1 h-6 w-6 flex-none text-rose-500" />
              <p className="text-lg text-slate-300 leading-snug">{item.other}</p>
            </div>

            {/* "Pait" Column */}
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="mt-1 h-6 w-6 flex-none text-blue-400" />
              <p className="text-lg font-medium text-white leading-snug">{item.pait}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="bg-slate-50">
      <section className="bg-white py-20 lg:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="mt-6 text-4xl font-bold text-slate-950 sm:text-5xl">
                A Smart Website & Marketing System to <span className="text-brand">Grow Your Business</span>
              </h1>
              {/* --- NEW CHECKLIST START --- */}
              <ul className="mt-8 max-w-xl space-y-4">
                {[
                  "Get Quality Customer Leads",
                  "Show up on Google Maps",
                  "Get more 5-star reviews",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-x-3 text-lg leading-7 text-slate-600">
                    <svg
                      className="mt-1 h-6 w-6 flex-none text-brand"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              {/* --- NEW CHECKLIST END --- */}

              <Link
                to="/book"
                className="mt-10 inline-flex items-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-slate-900"
              >
                Book Your Strategy Call
              </Link>
            </div>

            <div className="overflow-hidden rounded-[32px] bg-slate-100 shadow-xl">
              <img
                src="https://assets.ls-assets.com/uploads/7444f86a-574a-4dd4-be57-ea2f91c183eb/d0dd0610-eb3a-495e-80d5-7801a27f88e9.webp?w=1200"
                alt="Service website example"
                className="h-full w-full min-h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header (Optional but recommended) */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The <span className="text-brand">Danex</span> Advantage
            </h2>
          </div>

          {/* Calling your component here */}
          <ComparisonCard />
        </div>
      </section>

      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Our Work</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Get A Branded Site That Converts Like Crazy</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Here are just a few examples:
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 lg:py-28 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-brand/20 px-4 py-1 text-sm font-semibold text-brand">
              Marketing Features
            </span>
            <h2 className="mt-6 text-4xl font-bold">
              You Get More Than Just a Great Website
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Pick from any of our FREE additional add-ons to level-up your marketing and management.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: '5-Star Review Funnel',
                text: 'Automated review requests and follow-up to get only 5-star reviews.'
              },
              {
                title: 'Email and SMS Marketing Campaigns',
                text: 'Send off marketing messages to your contacts right from your dashboard.'
              },
              {
                title: 'Local SEO Boost',
                text: 'Get a quick boost to improve your Google Maps rankings.'
              },
              {
                title: 'Booking and Scheduling',
                text: 'Connect to your current route system or allow scheduling right on your site.'
              },
              {
                title: 'Lead Management and Reporting',
                text: 'Get clear reporting on traffic, leads and sales.'
              }
            ].map((feature) => (
              <div key={feature.title} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-slate-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div >

  );
}

export default Services;
