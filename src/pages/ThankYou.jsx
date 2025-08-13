import { NavLink } from 'react-router-dom'

export default function ThankYou() {
    return (
        <section className="min-h-[70vh] grid place-items-center px-4">
            <div className="max-w-xl text-center">
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-2xl">✓</div>
                <h1 className="text-3xl sm:text-4xl font-semibold mb-3">Payment received — you’re all set!</h1>
                <p className="text-gray-600 mb-8">
                    We’ve activated your demo merchant profile. Check your email for onboarding steps and a link to book a live walkthrough.
                </p>
                <div className="flex justify-center gap-3">
                    <NavLink to="/" className="px-4 py-2 rounded border hover:bg-gray-50">Back to home</NavLink>
                    <a href="#" className="px-4 py-2 rounded bg-black text-white">Book a demo</a>
                </div>
            </div>
        </section>
    )
}
