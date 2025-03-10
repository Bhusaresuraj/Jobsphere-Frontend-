import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  FileText,
  LineChart,
  MessageSquare,
  Mic,
  PieChart,
  Play,
  Settings,
  Sparkles,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful Features to Ace Your Interviews
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how JobSphere's AI-powered platform can transform your interview preparation experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Navigation */}
      <section className="w-full py-8 border-y bg-muted/50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="ai-interviews" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TabsTrigger
                  value="ai-interviews"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Cpu className="mr-2 h-4 w-4" />
                  AI Interviews
                </TabsTrigger>
                <TabsTrigger
                  value="feedback"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Real-time Feedback
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="personalization"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Personalization
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ai-interviews" className="space-y-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                    <Sparkles className="mr-1 h-4 w-4" />
                    <span>AI-Powered</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Realistic AI-Driven Mock Interviews
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Practice with our advanced AI interviewer that adapts to your responses and provides a realistic
                    interview experience tailored to your target role.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Role-specific questions based on industry standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Adaptive follow-up questions based on your responses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Simulates different interviewer personalities and styles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Covers technical, behavioral, and situational questions</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="AI Interview Simulation"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full h-16 w-16 p-0">
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Play demo</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <CardTitle>Extensive Question Library</CardTitle>
                    <CardDescription>Access thousands of curated interview questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our constantly updated library includes questions from real interviews at top companies, organized
                      by role, industry, and difficulty level.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <Mic className="h-6 w-6" />
                    </div>
                    <CardTitle>Speech Recognition</CardTitle>
                    <CardDescription>Practice speaking your answers out loud</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our advanced speech-to-text technology transcribes your spoken responses for analysis, helping you
                      improve your verbal communication skills.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <Timer className="h-6 w-6" />
                    </div>
                    <CardTitle>Timed Responses</CardTitle>
                    <CardDescription>Practice under realistic time constraints</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Simulate the pressure of real interviews with customizable timers for each question, helping you
                      learn to deliver concise and effective answers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                    <Sparkles className="mr-1 h-4 w-4" />
                    <span>AI Analysis</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Detailed Real-Time Feedback
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Receive comprehensive analysis of your interview responses with actionable insights to improve your
                    performance.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Content analysis for relevance and completeness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Communication style assessment (clarity, confidence, pace)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Technical accuracy evaluation for role-specific questions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Personalized improvement suggestions after each response</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Real-time Feedback Interface"
                  width={800}
                  height={600}
                  className="rounded-xl border shadow-lg"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <CardTitle>Response Structure Analysis</CardTitle>
                    <CardDescription>Learn to structure your answers effectively</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our AI evaluates how well you structure your responses, including use of the STAR method for
                      behavioral questions and logical flow for technical answers.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <CardTitle>Communication Assessment</CardTitle>
                    <CardDescription>Improve your verbal and non-verbal communication</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Get insights on your communication style, including pacing, clarity, filler words, and confidence
                      markers to help you present yourself professionally.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <CardTitle>Technical Accuracy</CardTitle>
                    <CardDescription>Validate your technical knowledge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      For technical roles, our AI evaluates the accuracy and depth of your technical responses,
                      highlighting areas where you can improve your knowledge.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                    <Sparkles className="mr-1 h-4 w-4" />
                    <span>Data-Driven</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Comprehensive Performance Analytics
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Track your progress over time with detailed analytics that highlight your strengths and areas for
                    improvement.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Performance trends across multiple interviews</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Skill breakdown with detailed scoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Question category performance analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Comparative benchmarks against industry standards</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-card rounded-xl border p-4 flex items-center justify-center">
                    <LineChart className="h-16 w-16 text-primary" />
                  </div>
                  <div className="aspect-square bg-card rounded-xl border p-4 flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-primary" />
                  </div>
                  <div className="aspect-square bg-card rounded-xl border p-4 flex items-center justify-center">
                    <PieChart className="h-16 w-16 text-primary" />
                  </div>
                  <div className="aspect-square bg-card rounded-xl border p-4 flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <LineChart className="h-6 w-6" />
                    </div>
                    <CardTitle>Progress Tracking</CardTitle>
                    <CardDescription>Monitor your improvement over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Track your interview performance scores over time with detailed charts and visualizations that
                      show your improvement trajectory.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <CardTitle>Skill Breakdown</CardTitle>
                    <CardDescription>Identify your strengths and weaknesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Get detailed breakdowns of your performance across different skills, from technical knowledge to
                      communication and problem-solving abilities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <PieChart className="h-6 w-6" />
                    </div>
                    <CardTitle>Comparative Analysis</CardTitle>
                    <CardDescription>See how you compare to industry benchmarks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Compare your performance against industry benchmarks and other candidates in similar roles to
                      understand where you stand.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="personalization" className="space-y-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                    <Sparkles className="mr-1 h-4 w-4" />
                    <span>Tailored Experience</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Personalized Interview Preparation
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Customize your interview practice experience to match your specific career goals, industry, and
                    experience level.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Role-specific interview templates and questions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Industry-focused preparation materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Experience-level appropriate difficulty settings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                      <span>Custom interview scenarios based on your target companies</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Personalization Settings Interface"
                  width={800}
                  height={600}
                  className="rounded-xl border shadow-lg"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <Settings className="h-6 w-6" />
                    </div>
                    <CardTitle>Custom Interview Templates</CardTitle>
                    <CardDescription>Create your own interview scenarios</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Build and save custom interview templates with specific questions, time limits, and difficulty
                      levels tailored to your preparation needs.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <CardTitle>Resume Integration</CardTitle>
                    <CardDescription>Practice with questions based on your resume</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Upload your resume to receive interview questions specifically tailored to your experience,
                      skills, and career trajectory.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <CardTitle>Adaptive Learning</CardTitle>
                    <CardDescription>Practice that evolves with your progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our AI adapts to your performance, automatically focusing on areas where you need the most
                      improvement while reinforcing your strengths.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from professionals who have transformed their interview performance with JobSphere
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-primary/10 h-12 w-12"></div>
                  <div>
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">Software Engineer at Google</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "After using JobSphere for just three weeks, I felt so much more confident in my technical interviews.
                  The AI feedback helped me identify patterns in my responses that I needed to improve. I landed my
                  dream job at Google!"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-primary/10 h-12 w-12"></div>
                  <div>
                    <p className="text-sm font-medium">Priya Sharma</p>
                    <p className="text-xs text-muted-foreground">Product Manager at Microsoft</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The personalized feedback on my behavioral responses was a game-changer. JobSphere helped me
                  structure my answers using the STAR method, which made a huge difference in my interviews. I'm now a
                  PM at Microsoft!"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-primary/10 h-12 w-12"></div>
                  <div>
                    <p className="text-sm font-medium">Marcus Chen</p>
                    <p className="text-xs text-muted-foreground">Data Scientist at Amazon</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As someone with interview anxiety, JobSphere was exactly what I needed. The practice interviews
                  helped me overcome my nervousness and articulate my thoughts clearly. The analytics showed my
                  improvement over time."
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Interview Skills?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of professionals who have improved their interview performance with JobSphere
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
                href="/pricing"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

