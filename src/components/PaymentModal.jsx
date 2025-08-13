import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PaymentModal({ open, onClose, lead }) {
    const navigate = useNavigate()
    const [processing, setProcessing] = useState(false)
    const [method, setMethod] = useState('FPX')
    const [amount] = useState(49.9) // demo fee
    const [status, setStatus] = useState('idle')

    useEffect(() => {
        if (!open) {
            setProcessing(false)
            setStatus('idle')
            setMethod('FPX')
        }
    }, [open])

    if (!open) return null

    const payNow = () => {
        setProcessing(true)
        setStatus('processing')
        // Simulate payment authorization & redirect to thank-you
        setTimeout(() => {
            setStatus('authorized')
            setTimeout(() => navigate('/thank-you'), 600)
        }, 1300)
    }

    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4" role="dialog" aria-modal="true">
            <div className="w-full max-w-lg rounded-xl bg-white shadow-lg overflow-hidden">
                <div className="flex items-center justify-between border-b px-5 py-4">
                    <div className="font-semibold">Axaipay Checkout (Demo)</div>
                    <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
                </div>

                <div className="p-5 grid gap-4">
                    <div className="text-sm text-gray-600">
                        {lead?.name ? `Hi ${lead.name},` : 'Hi there,'} complete your demo payment to activate the sandbox merchant.
                    </div>

                    <div className="rounded border p-4 grid gap-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-gray-500">Product</div>
                                <div className="font-medium">Sandbox Merchant Activation</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-gray-500">Amount</div>
                                <div className="font-semibold">RM{amount.toFixed(2)}</div>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Payment Method</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {['FPX', 'Visa', 'Mastercard', 'GrabPay', 'TNG'].map((m) => (
                                    <button
                                        key={m}
                                        type="button"
                                        onClick={() => setMethod(m)}
                                        className={`px-3 py-2 rounded border text-sm ${method === m ? 'bg-black text-white' : 'bg-white'}`}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Card / Account</label>
                            <input
                                className="rounded border px-3 py-2"
                                placeholder={method === 'FPX' ? 'Select your bank during FPX redirect' : '4111 1111 1111 1111'}
                                disabled
                            />
                            <p className="text-xs text-gray-500">
                                This is a sandbox — no real charges. In production, this step would securely capture details with tokenization & 3‑D Secure.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={payNow}
                        disabled={processing}
                        className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
                    >
                        {processing ? 'Processing…' : `Pay RM${amount.toFixed(2)}`}
                    </button>

                    <StatusBar status={status} />
                </div>
            </div>
        </div>
    )
}

function StatusBar({ status }) {
    const map = {
        idle: { label: 'Awaiting confirmation', dot: 'bg-gray-300' },
        processing: { label: 'Authorizing payment…', dot: 'bg-amber-500' },
        authorized: { label: 'Authorized — redirecting', dot: 'bg-green-600' },
    }
    const s = map[status] || map.idle
    return (
        <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className={`inline-block h-2 w-2 rounded-full ${s.dot}`}></span>
            <span>{s.label}</span>
        </div>
    )
}
