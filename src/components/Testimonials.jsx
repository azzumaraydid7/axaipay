export default function Testimonials() {
    const items = [
        { name: 'Nabila • D2C Cosmetics', quote: 'We increased checkout conversion by 22% after switching — setup took under a day.' },
        { name: 'Arun • Café Chain', quote: 'FPX + e‑wallets in one flow made mobile sales effortless.' },
        { name: 'Jay • SaaS Founder', quote: 'Subscriptions with webhooks gave us reliable recurring revenue tracking.' },
    ]
    return (
        <section className="py-16" id="how">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Proven to perform</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {items.map((t) => (
                        <figure key={t.name} className="rounded-lg border p-5 bg-white">
                            <blockquote className="text-gray-700">“{t.quote}”</blockquote>
                            <figcaption className="mt-3 text-sm text-gray-500">{t.name}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
