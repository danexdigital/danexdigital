function Contact() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Contact</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Let’s talk about your website</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Reach out with your questions or share your project details and we’ll respond quickly.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-[32px] bg-slate-50 p-8">
              <h2 className="text-xl font-semibold text-slate-950">Office</h2>
              <p className="mt-4 text-slate-600">Remote team serving local businesses across the US.</p>
            </div>
            <div className="rounded-[32px] bg-slate-50 p-8">
              <h2 className="text-xl font-semibold text-slate-950">Email</h2>
              <p className="mt-4 text-slate-600">hello@danexdigital.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
