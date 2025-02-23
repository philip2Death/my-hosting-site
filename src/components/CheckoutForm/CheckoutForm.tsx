// src/components/CheckoutForm.tsx
'use client'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { useState } from 'react'
import { createOrder } from '@/lib/order'

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    
    try {
      const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: { return_url: window.location.origin + '/dashboard' },
        redirect: 'if_required'
      })

      if (stripeError) {
        setError(stripeError.message || '支付失败')
        return
      }

      if (!paymentIntent) {
        throw new Error('支付信息获取失败')
      }

      await createOrder({
        amount: paymentIntent.amount / 100,
        productType: 'WEB_HOSTING', // 根据实际需求从参数获取
        paymentId: paymentIntent.id
      })

      window.location.href = '/dashboard?payment=success'
    } catch (err) {
      let errorMessage = '支付处理过程中发生错误';
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setError(errorMessage);
      console.error('支付错误:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <button 
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white p-3 rounded mt-6 hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? '处理中...' : '立即支付'}
      </button>
    </form>
  )
}