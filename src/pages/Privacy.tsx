function Privacy() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-slate-900">
          <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="text-lg leading-8 text-slate-600">
            We respect your privacy. This page describes the type of information we collect and how we use it to support our website services.
          </p>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p className="mt-4 text-slate-600">We collect contact details and project information submitted through our forms to respond to requests and deliver our services.</p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold">How We Use Data</h2>
            <p className="mt-4 text-slate-600">We use your information to communicate with you, deliver quotes, and provide support. We do not sell your information to third parties.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
