function Pricing() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Pricing</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Simple packages built for local business growth</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Choose the level of website support that best fits your business and launch timeline.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              name: 'Launch',
              price: '$2,999',
              features: ['Fast site build', 'Mobile-first design', 'Lead form integration', '1 revision round']
            },
            {
              name: 'Grow',
              price: '$4,999',
              features: ['SEO foundation', 'Conversion copy', 'Advanced forms', '2 revision rounds']
            },
            {
              name: 'Scale',
              price: '$7,999',
              features: ['Local SEO', 'Analytics setup', 'Paid media support', 'Priority delivery']
            }
          ].map((plan) => (
            <div key={plan.name} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{plan.name}</p>
              <p className="mt-6 text-5xl font-bold text-slate-950">{plan.price}</p>
              <p className="mt-4 text-slate-600">One-time website launch fee</p>
              <ul className="mt-8 space-y-4 text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 text-brand">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-slate-900">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
