export default function Trust() {
    const brands = ['Visa', 'Mastercard', 'FPX', 'GrabPay', 'TNG', 'Boost', 'Apple Pay', 'Google Pay']
    return (
        <section className="py-10 border-y bg-gray-50">
            <div className="mx-auto max-w-6xl px-4">
                <p className="text-center text-gray-600 mb-4">Trusted payment methods</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {brands.map((b) => (
                        <span key={b} className="text-xs sm:text-sm rounded border bg-white px-3 py-2">{b}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
