import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BrainCircuit, CheckCircle2, LineChart, MessageSquare, Mic, Star, Timer, TrendingUp } from "lucide-react"
import Image from "next/image"
import "../styles/animations.css" // Import the CSS file

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 z-0">
        <div className="animate-bg-circles absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl top-0 left-0"></div>
        <div className="animate-bg-circles absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl bottom-0 right-0 animation-delay-2000"></div>
        <div className="animate-bg-circles absolute w-72 h-72 rounded-full bg-accent/10 blur-3xl top-1/2 left-1/2 animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted animate-[fadeIn_1s_ease-out] relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-[textReveal_1s_ease-out]">
                  Master Your Job Interviews with AI
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl animate-[textPop_0.8s_ease-out_0.3s_both]">
                  Practice with realistic AI-powered mock interviews, get real-time feedback, and land your dream job.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button className="animate-[pulseGlow_2s_infinite_ease-in-out] hover:scale-105 transition-transform">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" className="animate-[fadeIn_1s_ease-out_0.6s_both] hover:scale-105 transition-transform">
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="JobSphere Interview Platform"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square animate-[float_6s_infinite_ease-in-out] hover:animate-[rotate3d_2s_infinite_linear]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted animate-[fadeIn_1s_ease-out] relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-[textReveal_0.8s_ease-out]">
                Features that Set You Apart
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-[textPop_0.8s_ease-out_0.2s_both]">
                Our AI-powered platform provides everything you need to ace your next interview.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              { icon: MessageSquare, title: "AI-Driven Mock Interviews", desc: "Practice with realistic interview questions tailored to your industry, role, and experience level." },
              { icon: Mic, title: "Speech-to-Text Analysis", desc: "Our AI transcribes and analyzes your responses in real-time for comprehensive feedback." },
              { icon: LineChart, title: "Performance Analytics", desc: "Track your progress over time with detailed metrics and personalized improvement suggestions." },
              { icon: Timer, title: "Timed Practice Sessions", desc: "Simulate real interview conditions with timed responses and pressure scenarios." },
              { icon: CheckCircle2, title: "Real-Time Feedback", desc: "Get instant insights on your confidence, clarity, and technical accuracy after each response." },
              { icon: TrendingUp, title: "Skill Development", desc: "Targeted exercises to improve specific areas like technical knowledge, communication, and problem-solving." },
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col justify-center space-y-4 animate-[cardPop_0.6s_ease-out] hover:animate-[lift_0.3s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary animate-[float_4s_infinite_ease-in-out]">
                  <feature.icon className="h-6 w-6 animate-[spin_3s_infinite_linear] hover:animate-[bounce_1s_infinite]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold animate-[textReveal_0.5s_ease-out]">{feature.title}</h3>
                  <p className="text-muted-foreground animate-[textPop_0.5s_ease-out_0.2s_both]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted animate-[fadeIn_1s_ease-out]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-[slideUp_0.5s_ease-out]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that fits your interview preparation needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[
              { title: "Free", price: "₹0", desc: "Forever free", features: ["3 mock interviews per month", "Basic feedback", "Limited question library"] },
              { title: "Pro", price: "₹1,499", desc: "per month", features: ["Unlimited mock interviews", "Detailed feedback & analytics", "Full question library", "Role-specific practice"], popular: true },
              { title: "Enterprise", price: "₹7,499", desc: "per month", features: ["Everything in Pro", "Team management", "Custom question sets", "Priority support"] },
            ].map((plan, index) => (
              <div 
                key={index}
                className="flex flex-col rounded-xl border bg-card p-6 shadow-sm relative animate-[fadeIn_0.5s_ease-out] hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full animate-bounce">
                    Most Popular
                  </div>
                )}
                <div className="space-y-2 animate-[slideUp_0.5s_ease-out_0.2s_both]">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <p className="text-muted-foreground">{plan.desc}</p>
                </div>
                <div className="mt-4 space-y-2 animate-[fadeIn_0.5s_ease-out_0.3s_both]">
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.desc}</p>
                </div>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center animate-[fadeIn_0.5s_ease-out] " style={{ animationDelay: `${i * 0.1 + 0.4}s` }}>
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary animate-pulse" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button className="w-full animate-[glow_3s_infinite_ease-in-out]">
                    {plan.title === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 animate-[fadeIn_1s_ease-out]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-[slideUp_0.5s_ease-out]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how JobSphere has helped candidates land their dream jobs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[
              { name: "Sarah J.", role: "Software Engineer", quote: "After practicing with JobSphere for just two weeks, I felt so much more confident in my interviews. I landed a job at a top tech company that I never thought I'd get!" },
              { name: "Michael T.", role: "Product Manager", quote: "The real-time feedback was a game-changer. I could immediately see where I needed to improve, and the AI suggestions were spot on. Highly recommend!" },
              { name: "Priya K.", role: "Data Scientist", quote: "As someone with interview anxiety, JobSphere was exactly what I needed. The practice interviews helped me overcome my nervousness and articulate my thoughts clearly." },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="flex flex-col justify-between rounded-xl border bg-card p-6 shadow-sm animate-[fadeIn_0.5s_ease-out] hover:animate-[glow_3s_infinite_ease-in-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-5 w-5 fill-primary text-primary animate-[spin_2s_infinite_linear]" 
                        style={{ animationDelay: `${star * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground animate-[fadeIn_0.5s_ease-out_0.2s_both]">{testimonial.quote}</p>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10 animate-pulse"></div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 animate-[fadeIn_1s_ease-out]">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight animate-[slideUp_0.5s_ease-out]">
              Ready to ace your next interview?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-[fadeIn_0.5s_ease-out_0.2s_both]">
              Join thousands of job seekers who have improved their interview skills with JobSphere.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="max-w-lg flex-1 animate-[glow_3s_infinite_ease-in-out]" 
              />
              <Button 
                type="submit" 
                className="animate-[glow_3s_infinite_ease-in-out] hover:scale-105 transition-transform"
              >
                Get Started
              </Button>
            </form>
            <p className="text-xs text-muted-foreground animate-[fadeIn_0.5s_ease-out_0.4s_both]">
              Start your free trial today. No credit card required.{" "}
              <Link href="/terms" className="underline underline-offset-2 hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 animate-[fadeIn_1s_ease-out]">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 animate-[spin_4s_infinite_linear]" />
            <p className="text-sm font-medium animate-[fadeIn_0.5s_ease-out_0.2s_both]">
              JobSphere © {new Date().getFullYear()}
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            {["About", "Privacy", "Terms", "Contact"].map((item, index) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="text-xs hover:underline underline-offset-4 hover:text-primary transition-colors animate-[fadeIn_0.5s_ease-out]"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}