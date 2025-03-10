import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, HelpCircle, X } from "lucide-react"
import SubscriptionCheckout from "@/components/subscription-checkout"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that fits your interview preparation needs
              </p>
            </div>
            <div className="w-full max-w-sm">
              <Tabs defaultValue="monthly" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly">
                  <div className="mt-4 text-center text-sm text-muted-foreground">Billed monthly. Cancel anytime.</div>
                </TabsContent>
                <TabsContent value="annual">
                  <div className="mt-4 text-center text-sm text-muted-foreground">Billed annually. Cancel anytime.</div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Free Plan */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <CardDescription>Get started with basic interview practice</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold">₹0</div>
                  <div className="text-sm text-muted-foreground">Forever free</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>3 mock interviews per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic AI feedback</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Limited question library</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Performance tracking</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <X className="mr-2 h-4 w-4" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <X className="mr-2 h-4 w-4" />
                    <span>Custom interview templates</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <X className="mr-2 h-4 w-4" />
                    <span>Resume analysis</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="flex flex-col border-primary relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>For serious job seekers</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold">₹1,499</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited mock interviews</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Comprehensive AI feedback</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Full question library</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced performance analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Role-specific practice</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom interview templates</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <X className="mr-2 h-4 w-4" />
                    <span>Resume analysis & optimization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <SubscriptionCheckout planId="pro_monthly" planName="Pro" amount={1499} interval="monthly" />
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For teams and organizations</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold">₹7,499</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Team management dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom question sets</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Resume analysis & optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom branding options</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <SubscriptionCheckout
                  planId="enterprise_monthly"
                  planName="Enterprise"
                  amount={7499}
                  interval="monthly"
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare Features</h2>
              <p className="max-w-[900px] text-muted-foreground">See which plan is right for you</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6 font-medium">Feature</th>
                  <th className="text-center py-4 px-6 font-medium">Free</th>
                  <th className="text-center py-4 px-6 font-medium">Pro</th>
                  <th className="text-center py-4 px-6 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Mock Interviews</td>
                  <td className="text-center py-4 px-6">3 per month</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Question Library</td>
                  <td className="text-center py-4 px-6">Basic (100+)</td>
                  <td className="text-center py-4 px-6">Full (1000+)</td>
                  <td className="text-center py-4 px-6">Full + Custom</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">AI Feedback</td>
                  <td className="text-center py-4 px-6">Basic</td>
                  <td className="text-center py-4 px-6">Comprehensive</td>
                  <td className="text-center py-4 px-6">Comprehensive</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Analytics</td>
                  <td className="text-center py-4 px-6">Basic</td>
                  <td className="text-center py-4 px-6">Advanced</td>
                  <td className="text-center py-4 px-6">Advanced + Team</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Custom Templates</td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="h-5 w-5 mx-auto text-primary" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Resume Analysis</td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Team Management</td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Priority Support</td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 mx-auto text-muted-foreground" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="h-5 w-5 mx-auto text-primary" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Everything you need to know about our pricing and plans
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  What payment methods do you accept?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit/debit cards, UPI, net banking, and wallet payments through our secure
                  payment gateway, Razorpay. All transactions are encrypted and secure.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Can I switch between plans?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be
                  available immediately. If you downgrade, the changes will take effect at the end of your current
                  billing cycle.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Is there a free trial for paid plans?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer a 7-day free trial for our Pro plan. You can cancel anytime during the trial period and
                  won't be charged. No credit card is required for the free trial.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Can I cancel my subscription anytime?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. When you cancel, you'll still have access to your
                  paid features until the end of your current billing cycle.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Do you offer discounts for students?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer a 50% discount on our Pro plan for students with a valid .edu email address or student
                  ID. Contact our support team to apply for the student discount.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Will I get a receipt for my payment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you will receive an email receipt immediately after your payment is processed. You can also
                  access all your payment receipts from your account dashboard under the Billing section.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Ace Your Next Interview?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your free trial today and experience the difference
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

