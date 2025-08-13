export async function fakeCreateCheckout(lead) {
    // Simulate backend validation + session creation
    await new Promise((r) => setTimeout(r, 700))
    return {
        id: `sess_${Math.random().toString(36).slice(2, 10)}`,
        amount: 4990,
        currency: 'MYR',
        customer_email: lead.email,
        description: 'Sandbox Merchant Activation',
    }
}
