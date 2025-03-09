 // src/app/checkout/page.tsx
'use client'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from '@/components/CheckoutForm/CheckoutForm'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)
export default function CheckoutPage() {
  return (
    <div className="container mx-auto my-12 p-6 max-w-2xl bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">订单支付</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

