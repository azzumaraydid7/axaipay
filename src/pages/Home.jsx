import { useRef, useState } from 'react'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import Trust from '../components/Trust.jsx'
import Testimonials from '../components/Testimonials.jsx'
import LeadForm from '../components/LeadForm.jsx'
import PaymentModal from '../components/PaymentModal.jsx'

export default function Home() {
    const formRef = useRef(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [leadData, setLeadData] = useState(null)

    const handleGetStarted = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // When form submits successfully, open the mock checkout modal
    const handleLeadSubmit = (payload) => {
        setLeadData(payload)
        setModalOpen(true)
    }

    return (
        <>
            <Hero onGetStarted={handleGetStarted} />
            <Features />
            <Trust />
            <Testimonials />
            <section ref={formRef} className="py-16 bg-gray-50">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Start accepting payments</h2>
                    <p className="text-gray-600 mb-6">Tell us about your business. We’ll spin up a demo checkout in seconds.</p>
                    <LeadForm onSuccess={handleLeadSubmit} />
                </div>
            </section>

            <PaymentModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                lead={leadData}
            />
        </>
    )
}
