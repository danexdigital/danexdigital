function HowItWorks() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">How It Works</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">A fast, transparent website process</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We keep the process simple so local businesses can launch quickly and begin capturing new leads without guesswork.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Discover',
              description: 'We gather your goals, audience, and existing assets so every page supports real conversions.'
            },
            {
              title: 'Design',
              description: 'We create an on-brand website built for local search and high-value leads.'
            },
            {
              title: 'Launch',
              description: 'We go live quickly with analytics, forms, and conversion tracking in place.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="text-3xl font-bold text-brand">{item.title.charAt(0)}</div>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-4 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
