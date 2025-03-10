import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Get the Razorpay signature from the headers
    const razorpaySignature = request.headers.get("x-razorpay-signature")

    if (!razorpaySignature) {
      return NextResponse.json({ error: "Missing Razorpay signature" }, { status: 400 })
    }

    // Verify the webhook signature
    // In production, you would use your Razorpay webhook secret
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || "your_webhook_secret"

    const expectedSignature = crypto.createHmac("sha256", secret).update(JSON.stringify(body)).digest("hex")

    if (expectedSignature !== razorpaySignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Process the webhook event based on the event type
    const event = body.event

    switch (event) {
      case "payment.authorized":
        // Handle payment authorization
        await handlePaymentAuthorized(body.payload.payment.entity)
        break

      case "payment.failed":
        // Handle payment failure
        await handlePaymentFailed(body.payload.payment.entity)
        break

      case "subscription.activated":
        // Handle subscription activation
        await handleSubscriptionActivated(body.payload.subscription.entity)
        break

      case "subscription.cancelled":
        // Handle subscription cancellation
        await handleSubscriptionCancelled(body.payload.subscription.entity)
        break

      default:
        // Handle other events
        console.log(`Unhandled event: ${event}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Handler functions for different webhook events
async function handlePaymentAuthorized(payment: any) {
  // Update user's subscription status in your database
  console.log("Payment authorized:", payment.id)

  // In a real implementation, you would:
  // 1. Verify the payment details
  // 2. Update the user's subscription in your database
  // 3. Send a confirmation email to the user
}

async function handlePaymentFailed(payment: any) {
  // Handle failed payment
  console.log("Payment failed:", payment.id)

  // In a real implementation, you would:
  // 1. Log the failed payment
  // 2. Notify the user about the failed payment
  // 3. Provide instructions for retrying
}

async function handleSubscriptionActivated(subscription: any) {
  // Handle subscription activation
  console.log("Subscription activated:", subscription.id)

  // In a real implementation, you would:
  // 1. Update the user's subscription status
  // 2. Grant access to premium features
  // 3. Send a welcome email
}

async function handleSubscriptionCancelled(subscription: any) {
  // Handle subscription cancellation
  console.log("Subscription cancelled:", subscription.id)

  // In a real implementation, you would:
  // 1. Update the user's subscription status
  // 2. Schedule removal of premium access at the end of the billing period
  // 3. Send a cancellation confirmation email
}

