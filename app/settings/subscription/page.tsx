"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, CreditCard, Download, AlertCircle, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import SubscriptionCheckout from "@/components/subscription-checkout"

export default function SubscriptionPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentPlan, setCurrentPlan] = useState("pro") // For demo purposes
  const { toast } = useToast()

  const handleCancelSubscription = async () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Subscription Cancelled",
        description: "Your subscription will remain active until the end of the current billing period.",
        variant: "default",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Subscription</h2>
        </div>

        <Tabs defaultValue="current-plan" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current-plan">Current Plan</TabsTrigger>
            <TabsTrigger value="billing-history">Billing History</TabsTrigger>
            <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="current-plan" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Current Plan</CardTitle>
                    <CardDescription>Manage your subscription plan and billing cycle</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">Pro Plan</h3>
                      <p className="text-sm text-muted-foreground">₹1,499/month</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <p className="text-sm">
                      Your next billing date is <strong>April 15, 2025</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">You will be charged ₹1,499 on this date.</p>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm" disabled={isLoading} onClick={handleCancelSubscription}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Cancel Subscription"
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Available Plans</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className={`${currentPlan === "free" ? "border-primary" : ""}`}>
                      <CardHeader>
                        <CardTitle>Free</CardTitle>
                        <CardDescription>Basic features</CardDescription>
                        <div className="mt-2 text-2xl font-bold">₹0</div>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                            <span>3 mock interviews per month</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                            <span>Basic feedback</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        {currentPlan === "free" ? (
                          <Button disabled className="w-full">
                            Current Plan
                          </Button>
                        ) : (
                          <Button variant="outline" className="w-full">
                            Downgrade
                          </Button>
                        )}
                      </CardFooter>
                    </Card>

                    <Card className={`${currentPlan === "pro" ? "border-primary" : ""}`}>
                      <CardHeader>
                        <CardTitle>Pro</CardTitle>
                        <CardDescription>For serious job seekers</CardDescription>
                        <div className="mt-2 text-2xl font-bold">₹1,499</div>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                            <span>Unlimited mock interviews</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                            <span>Advanced feedback</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        {currentPlan === "pro" ? (
                          <Button disabled className="w-full">
                            Current Plan
                          </Button>
                        ) : (
                          <SubscriptionCheckout planId="pro_monthly" planName="Pro" amount={1499} interval="monthly" />
                        )}
                      </CardFooter>
                    </Card>

                    <Card className={`${currentPlan === "enterprise" ? "border-primary" : ""}`}>
                      <CardHeader>
                        <CardTitle>Enterprise</CardTitle>
                        <CardDescription>For teams</CardDescription>
                        <div className="mt-2 text-2xl font-bold">₹7,499</div>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                            <span>Everything in Pro</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                            <span>Team management</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        {currentPlan === "enterprise" ? (
                          <Button disabled className="w-full">
                            Current Plan
                          </Button>
                        ) : (
                          <SubscriptionCheckout
                            planId="enterprise_monthly"
                            planName="Enterprise"
                            amount={7499}
                            interval="monthly"
                          />
                        )}
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing-history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View and download your past invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border divide-y">
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">March 15, 2025</p>
                      <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-medium">₹1,499.00</p>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">February 15, 2025</p>
                      <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-medium">₹1,499.00</p>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">January 15, 2025</p>
                      <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-medium">₹1,499.00</p>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment-methods" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                </div>

                <div className="rounded-lg border border-dashed p-4">
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <CreditCard className="h-8 w-8 text-muted-foreground mb-2" />
                    <h3 className="font-medium">Add a new payment method</h3>
                    <p className="text-sm text-muted-foreground mt-1">Add a new credit card, debit card, or UPI ID</p>
                    <Button className="mt-4">Add Payment Method</Button>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5 mr-2" />
                    <div>
                      <h4 className="text-sm font-medium">Secure Payments</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        All payments are processed securely through Razorpay. We never store your full card details.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

