export default function Hero({ onGetStarted }) {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 grid gap-10 sm:grid-cols-2 items-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                        Accept Payments Anywhere with <span className="underline decoration-4 decoration-black/30">Axaipay</span>
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Cards, FPX online banking, e‑wallets, BNPL, subscriptions, and QR payments — all in one developer‑friendly platform.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <button onClick={onGetStarted} className="px-5 py-3 rounded bg-black text-white">Get started</button>
                        <a href="#features" className="px-5 py-3 rounded border hover:bg-gray-50">See features</a>
                    </div>
                    <p className="mt-3 text-xs text-gray-500">No setup fees • Go live fast • Secure by default</p>
                </div>

                <div className="relative">
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
                        <div className="text-sm font-medium mb-2">Live transactions</div>
                        <div className="grid gap-2">
                            {[
                                { id: 'FPX-8821', method: 'FPX', amount: 'RM128.00' },
                                { id: 'CRD-4412', method: 'Visa', amount: 'RM49.90' },
                                { id: 'EWL-2210', method: 'GrabPay', amount: 'RM15.00' },
                            ].map((t) => (
                                <div key={t.id} className="flex items-center justify-between rounded border p-3">
                                    <div className="text-xs text-gray-500">{t.id}</div>
                                    <div className="text-sm">{t.method}</div>
                                    <div className="font-medium">{t.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 rotate-3 rounded-xl border bg-white p-4 shadow-sm hidden sm:block">
                        <div className="text-xs text-gray-500">Conversion this week</div>
                        <div className="text-2xl font-semibold">+27%</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
