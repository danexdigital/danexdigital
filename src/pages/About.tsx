function About() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">About Us</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">We help local businesses win online</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Danex Digital builds websites that are fast, trustworthy, and optimized for leads. We focus on what matters most: customers, conversions, and growth.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {[
            { title: 'Purpose', text: 'Build websites that help service brands generate more calls and booked jobs.' },
            { title: 'Approach', text: 'Fast launches, clear process, and conversion-first design for measurable results.' },
            { title: 'Promise', text: 'No upfront fees and no pressure — you only pay when your site meets your expectations.' }
          ].map((item) => (
            <div key={item.title} className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-4 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
