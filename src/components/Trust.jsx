import visaLogo from '../assets/logos/visa.png'
import mastercardLogo from '../assets/logos/mastercard.svg'
import fpxLogo from '../assets/logos/fpx.png'
import grabpayLogo from '../assets/logos/grabpay.png'
import tngLogo from '../assets/logos/tng-ewallet.png'
import boostLogo from '../assets/logos/boost.webp'
import googlePayLogo from '../assets/logos/google-pay.webp'

export default function Trust() {
    const brands = [
        { name: 'Visa', logo: visaLogo },
        { name: 'Mastercard', logo: mastercardLogo },
        { name: 'FPX', logo: fpxLogo },
        { name: 'GrabPay', logo: grabpayLogo },
        { name: 'Touch n Go', logo: tngLogo },
        { name: 'Boost', logo: boostLogo },
        { name: 'Google Pay', logo: googlePayLogo },
    ];

    return (
        <section className="py-10 border-y bg-gray-50">
            <div className="mx-auto max-w-6xl px-4">
                <p className="text-center text-gray-600 mb-4">Trusted payment methods</p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {brands.map((b) => (
                        <div key={b.name} className="flex items-center justify-center bg-white p-2 rounded shadow-sm">
                            <img
                                src={b.logo}
                                alt={b.name}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}