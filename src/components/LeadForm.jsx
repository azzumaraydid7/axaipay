import { useState } from 'react'
import { fakeCreateCheckout } from '../utils/fakeApi.js'

export default function LeadForm({ onSuccess }) {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', business: 'Retail' })
    const [error, setError] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        setError('')
        if (!form.name || !form.email) {
            setError('Name and email are required.')
            return
        }
        setLoading(true)
        // Simulate backend: create a "checkout session" based on the lead
        const session = await fakeCreateCheckout(form)
        setLoading(false)
        onSuccess({ ...form, session })
    }

    return (
        <form onSubmit={submit} className="rounded-lg border bg-white p-5 grid gap-4">
            <div className="grid gap-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                    className="rounded border px-3 py-2"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g., Muhd Azzumar Aydid"
                />
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-medium">Email</label>
                <input
                    className="rounded border px-3 py-2"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                />
            </div>
            <div className="grid gap-2">
                <label className="text-sm font-medium">Business Type</label>
                <select
                    className="rounded border px-3 py-2"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                >
                    <option>Retail</option>
                    <option>F&B</option>
                    <option>eCommerce</option>
                    <option>Services</option>
                    <option>SaaS / Subscriptions</option>
                </select>
            </div>

            {!!error && <p className="text-sm text-red-600">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
            >
                {loading ? 'Creating demo checkout…' : 'Continue'}
            </button>
            <p className="text-xs text-gray-500">By continuing, you agree to the demo terms.</p>
        </form>
    )
}
