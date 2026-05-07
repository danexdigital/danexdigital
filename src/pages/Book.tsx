function Book() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Book a Call</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Schedule your free strategy session</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Fill in your details and we’ll reach out to book a quick call to review your website goals.
            </p>
          </div>
          <form className="mt-12 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Business website or industry</span>
              <input
                type="text"
                placeholder="Roofing, plumbing, HVAC, etc."
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">How can we help?</span>
              <textarea
                rows={5}
                placeholder="Tell us about your current website, leads, or growth goals."
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </label>
            <button className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-slate-900">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Book;
