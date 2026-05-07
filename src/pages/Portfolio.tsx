function Portfolio() {
  return (
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
  );
}

export default Portfolio;
