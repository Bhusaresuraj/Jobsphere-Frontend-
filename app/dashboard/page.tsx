import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, LineChart, MessageSquare, Play, PlusCircle, Star } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>

        {/* Welcome Card for New Users */}
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle>Welcome to JobSphere!</CardTitle>
            <CardDescription>Get started with your first AI-powered mock interview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              You haven't completed any interviews yet. Start your first mock interview to receive personalized feedback
              and improve your skills.
            </p>
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/interviews">
                  <Play className="mr-2 h-4 w-4" />
                  Start Your First Interview
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Interviews</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">Start your first interview today</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">--</div>
                  <p className="text-xs text-muted-foreground">Complete an interview to see your score</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Practice Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0h</div>
                  <p className="text-xs text-muted-foreground">Track your practice time</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">Schedule your first session</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] w-full flex flex-col items-center justify-center">
                    <LineChart className="h-16 w-16 text-muted-foreground mb-4" />
                    <span className="text-muted-foreground text-center">
                      Complete your first interview to see your performance data
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Interview Types</CardTitle>
                  <CardDescription>Choose from different interview formats</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="rounded-full bg-primary/10 p-2 mr-3">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Technical Interview</p>
                          <p className="text-xs text-muted-foreground">Role-specific technical questions</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/interviews/new?type=technical">Start</Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="rounded-full bg-primary/10 p-2 mr-3">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Behavioral Interview</p>
                          <p className="text-xs text-muted-foreground">STAR method practice</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/interviews/new?type=behavioral">Start</Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="rounded-full bg-primary/10 p-2 mr-3">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">System Design</p>
                          <p className="text-xs text-muted-foreground">Architecture and design questions</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/interviews/new?type=system">Start</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Interview Preparation</CardTitle>
                <CardDescription>Get started with these recommended practice sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Start with Fundamentals</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Begin with a basic technical interview covering fundamental concepts for your role. This will help
                      establish a baseline for your skills.
                    </p>
                    <Button className="mt-4" asChild>
                      <Link href="/interviews/new?type=fundamentals">Start Fundamentals Interview</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Practice STAR Method</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      The STAR method (Situation, Task, Action, Result) is essential for behavioral interviews. Practice
                      structuring your responses with this format.
                    </p>
                    <Button className="mt-4" asChild>
                      <Link href="/interviews/new?type=star">Practice STAR Method</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Complete Your Profile</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      For more personalized interview questions and feedback, complete your profile with your
                      experience, skills, and target roles.
                    </p>
                    <Button className="mt-4" variant="outline" asChild>
                      <Link href="/settings">Complete Profile</Link>
                    </Button>
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

