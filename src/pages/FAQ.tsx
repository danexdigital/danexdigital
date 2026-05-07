function FAQ() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">FAQ</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Answers to the most common questions about our website process and service packages.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {[
            {
              question: 'How quickly can you launch a website?',
              answer: 'Most local business websites can launch in a few days once content and approvals are complete.'
            },
            {
              question: 'Do you charge anything upfront?',
              answer: 'No. We make sure you’re happy with the website before asking for the final payment.'
            },
            {
              question: 'Can you optimize my website for local search?',
              answer: 'Yes, every website is built with local SEO best practices so customers can find you online.'
            },
            {
              question: 'What happens after launch?',
              answer: 'We can support analytics, tracking, updates, and improved conversion optimization over time.'
            }
          ].map((item) => (
            <div key={item.question} className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-xl font-semibold text-slate-950">{item.question}</h2>
              <p className="mt-4 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
