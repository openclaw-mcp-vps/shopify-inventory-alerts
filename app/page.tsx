export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Shopify Inventory Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop losing sales to{" "}
          <span className="text-[#58a6ff]">stockouts</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Predict when any SKU will run out based on real sales velocity. Get alerted days in advance and auto-notify your suppliers — before customers see &ldquo;Out of Stock.&rdquo;
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required &middot; 14-day free trial</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Sales Velocity Engine", desc: "Calculates per-SKU sell-through rates using rolling 30/60/90-day windows." },
            { title: "Predictive Stockout Alerts", desc: "Forecasts exact days-until-empty and alerts you via email or Slack." },
            { title: "Supplier Automation", desc: "Sends pre-written reorder emails to your suppliers automatically when stock is critical." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <p className="text-[#8b949e] text-sm mb-6">per month &middot; cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited SKU tracking",
              "Real-time Shopify webhook sync",
              "Predictive stockout forecasting",
              "Automated supplier email alerts",
              "Slack & email notifications",
              "30/60/90-day velocity reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started — $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "After signup you install a lightweight Shopify app that registers webhooks for inventory updates. No manual CSV exports needed — data flows in real time."
            },
            {
              q: "How accurate are the stockout predictions?",
              a: "Predictions use a rolling sales velocity model across 30, 60, and 90-day windows. Accuracy improves with more sales history and accounts for seasonal trends."
            },
            {
              q: "Can I customize the supplier notification emails?",
              a: "Yes. Each supplier has a configurable email template with your preferred reorder quantities, lead times, and contact details. Emails send automatically when stock hits your threshold."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Shopify Inventory Alerts. All rights reserved.
      </footer>
    </main>
  );
}
