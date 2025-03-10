import { BrainCircuit, CheckCircle2, Users, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About JobSphere</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transforming interview preparation with AI-powered technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <BrainCircuit className="mr-1 h-4 w-4" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Founded with a Purpose</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                JobSphere was founded in 2022 by a team of AI researchers, career coaches, and HR professionals who
                recognized a gap in the interview preparation market. We saw that while technical skills were important,
                many qualified candidates struggled with the interview process itself.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Our mission is to democratize access to high-quality interview preparation, helping job seekers from all
                backgrounds gain confidence and succeed in their career journeys.
              </p>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border bg-muted flex items-center justify-center">
              <BrainCircuit className="h-24 w-24 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground">The principles that guide everything we do</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                We're committed to providing the highest quality AI-powered interview preparation tools, constantly
                refining our technology to deliver accurate, helpful feedback.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Inclusivity</h3>
              <p className="text-muted-foreground">
                We believe everyone deserves access to quality interview preparation, regardless of background,
                experience level, or financial resources.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously push the boundaries of what's possible with AI to create more realistic, helpful, and
                personalized interview experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground">Meet the people behind JobSphere</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-32 w-32 rounded-full bg-muted"></div>
              <div>
                <h3 className="text-xl font-bold">Priya Sharma</h3>
                <p className="text-muted-foreground">CEO & Co-Founder</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Former HR Director with 15+ years of experience in tech recruitment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-32 w-32 rounded-full bg-muted"></div>
              <div>
                <h3 className="text-xl font-bold">Alex Johnson</h3>
                <p className="text-muted-foreground">CTO & Co-Founder</p>
              </div>
              <p className="text-sm text-muted-foreground">
                AI researcher with a PhD in Natural Language Processing from Stanford.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-32 w-32 rounded-full bg-muted"></div>
              <div>
                <h3 className="text-xl font-bold">Marcus Chen</h3>
                <p className="text-muted-foreground">Chief Product Officer</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Former Product Lead at Google with expertise in AI-powered tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="aspect-video overflow-hidden rounded-xl border bg-background flex items-center justify-center">
              <Globe className="h-24 w-24 text-primary/20" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Global Impact</h2>
              <p className="text-muted-foreground">
                Since our launch, JobSphere has helped over 100,000 job seekers across 50+ countries prepare for
                interviews and land their dream jobs. Our AI technology has conducted more than 1 million mock
                interviews, providing personalized feedback that has measurably improved outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">100k+</div>
                  <div className="text-sm text-muted-foreground">Users Worldwide</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Mock Interviews</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">78%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Journey</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're on a mission to transform how people prepare for interviews. Start your preparation journey with
                JobSphere today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get Started Free
              </a>
              <a
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

