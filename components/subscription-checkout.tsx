"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { createRazorpayOrder } from "@/lib/payment"
import { useToast } from "@/hooks/use-toast"

declare global {
  interface Window {
    Razorpay: any
  }
}

interface SubscriptionCheckoutProps {
  planId: string
  planName: string
  amount: number
  interval: "monthly" | "annual"
}

export default function SubscriptionCheckout({ planId, planName, amount, interval }: SubscriptionCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async () => {
    try {
      setIsLoading(true)

      // Create an order on the server
      const order = await createRazorpayOrder({
        planId,
        amount,
        currency: "INR",
        receipt: `order_rcpt_${Date.now()}`,
      })

      // Load the Razorpay SDK if not already loaded
      if (!window.Razorpay) {
        await loadRazorpayScript()
      }

      // Initialize Razorpay checkout
      const options = {
        key: "rzp_test_YourTestKey", // Replace with your actual Razorpay key
        amount: amount * 100, // Razorpay expects amount in paise
        currency: "INR",
        name: "JobSphere",
        description: `${planName} Plan - ${interval}`,
        order_id: order.id,
        image: "/logo.png",
        handler: (response: any) => {
          // Handle successful payment
          handlePaymentSuccess(response)
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          plan_id: planId,
          interval: interval,
        },
        theme: {
          color: "#3B82F6",
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "Payment Error",
        description: "There was a problem processing your payment. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = resolve
      document.body.appendChild(script)
    })
  }

  const handlePaymentSuccess = async (response: any) => {
    try {
      // Here you would typically verify the payment on your server
      // and create/update the user's subscription

      toast({
        title: "Payment Successful!",
        description: `You are now subscribed to the ${planName} plan.`,
        variant: "default",
      })

      // Redirect to dashboard or subscription confirmation page
      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Verification error:", error)
      toast({
        title: "Verification Error",
        description: "Payment was successful, but we couldn't verify it. Please contact support.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button className="w-full" onClick={handleSubscribe} disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        `Subscribe Now`
      )}
    </Button>
  )
}

