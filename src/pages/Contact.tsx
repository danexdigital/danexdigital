import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('xgodnwda');

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Contact Danex Digital</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Tell us about your business</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Share the details of your website, leads, or growth goals and we’ll get back to you quickly.
            </p>
          </div>

          {state.succeeded ? (
            <div className="mt-12 rounded-[32px] border border-emerald-200 bg-emerald-50 p-10 text-center text-emerald-900 shadow-sm">
              <h2 className="text-2xl font-semibold">Thanks for reaching out!</h2>
              <p className="mt-4 text-sm leading-7">
                Your message has been sent successfully. We’ll reply as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Name</span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Email</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Tell us about your project</span>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What are your website goals? What’s working today?"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </label>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
