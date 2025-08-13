export default function Features() {
    const items = [
        { title: 'Payment Gateway', body: 'Cards (Visa/Mastercard), FPX, e‑wallets with tokenization & 3‑D Secure.' },
        { title: 'FPX Online Banking', body: 'Instant bank transfers with real‑time status callbacks.' },
        { title: 'E‑Wallets', body: 'GrabPay, TnG, Boost — one integration, multiple wallets.' },
        { title: 'BNPL & Instalments', body: 'Offer flexible plans and 0% instalments to boost AOV.' },
        { title: 'Subscriptions', body: 'Recurring billing with dunning & webhook events.' },
        { title: 'Payouts', body: 'Automated settlements and split payments for marketplaces.' },
    ]

    return (
        <section id="features" className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Everything you need to convert</h2>
                <p className="text-gray-600 mb-8">Built for speed, trust, and simplicity — optimized for conversions.</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((f) => (
                        <div key={f.title} className="rounded-lg border p-5">
                            <div className="text-lg font-semibold">{f.title}</div>
                            <p className="mt-2 text-gray-600 text-sm">{f.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
