"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, LineChart, MessageSquare, Play, PlusCircle, Star } from "lucide-react"
import Link from "next/link"
import { useUserStore } from "@/store/useUserStore"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Define types based on your API response
interface Template {
  id: number
  name: string
  job_role: string
  industry: string
  session_duration: number
  num_questions: number
  questions: { questions: string[] }
  // Add other fields as needed
}

interface Session {
  id: number
  user: number
  template: Template
  status: string
  created_at: string
  updated_at: string
  duration_minutes: number
  responses: { [key: string]: { text: string; audio: string } }
  transcriptions: { [key: string]: string }
}

interface DashboardData {
  templates: Template[]
  sessions: Session[]
}

export default function DashboardPage() {
  const { accessToken } = useUserStore()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/interview/dashboard/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        if (!response.ok) throw new Error("Failed to fetch dashboard data")
        const data: DashboardData = await response.json()
        setDashboardData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    if (accessToken) fetchDashboardData()
  }, [accessToken])

  // Process data for dashboard metrics
  const processDashboardData = () => {
    if (!dashboardData) return { totalInterviews: 0, avgScore: 0, practiceTime: 0, upcomingSessions: 0 }

    const sessions = dashboardData.sessions
    const completedSessions = sessions.filter((s) => s.status === "completed")
    const totalInterviews = sessions.length
    const practiceTime = completedSessions.reduce((sum, s) => sum + s.duration_minutes, 0) / 60 // Convert to hours

    // For simplicity, assume a mock average score since the API doesn't provide scores directly
    // In a real scenario, you'd fetch analysis data or include scores in the response
    const avgScore = completedSessions.length > 0 ? 75 : 0 // Mock value; replace with real calculation if available

    // Upcoming sessions could be "in_progress" or based on a scheduled date (not in current data)
    const upcomingSessions = sessions.filter((s) => s.status === "in_progress").length

    return { totalInterviews, avgScore, practiceTime, upcomingSessions }
  }

  const { totalInterviews, avgScore, practiceTime, upcomingSessions } = processDashboardData()

  // Prepare data for charts
  const performanceData = dashboardData?.sessions
    .filter((s) => s.status === "completed")
    .map((s, index) => ({
      name: `Interview ${s.id}`,
      score: 75 + Math.random() * 25 - 12.5, // Mock score; replace with real data
    })) || []

  const interviewTypeData = [
    { name: "Completed", value: dashboardData?.sessions.filter((s) => s.status === "completed").length || 0 },
    { name: "In Progress", value: dashboardData?.sessions.filter((s) => s.status === "in_progress").length || 0 },
  ]

  const COLORS = ["#0088FE", "#00C49F"]

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (error) {
    return <div className="text-destructive p-8">{error}</div>
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>

        {/* Welcome Card for New Users */}
        {totalInterviews === 0 && (
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle>Welcome to JobSphere!</CardTitle>
              <CardDescription>Get started with your first AI-powered mock interview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You haven't completed any interviews yet. Start your first mock interview to receive personalized
                feedback and improve your skills.
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
        )}

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
                  <div className="text-2xl font-bold">{totalInterviews}</div>
                  <p className="text-xs text-muted-foreground">
                    {totalInterviews > 0 ? "Keep up the practice!" : "Start your first interview today"}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{avgScore ? `${avgScore.toFixed(1)}%` : "--"}</div>
                  <p className="text-xs text-muted-foreground">
                    {avgScore ? "Your overall performance" : "Complete an interview to see your score"}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Practice Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{practiceTime.toFixed(1)}h</div>
                  <p className="text-xs text-muted-foreground">Total time spent practicing</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{upcomingSessions}</div>
                  <p className="text-xs text-muted-foreground">
                    {upcomingSessions > 0 ? "Active sessions" : "Schedule your next session"}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  {performanceData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-[200px] w-full flex flex-col items-center justify-center">
                      <LineChart className="h-16 w-16 text-muted-foreground mb-4" />
                      <span className="text-muted-foreground text-center">
                        Complete your first interview to see your performance data
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Interview Status</CardTitle>
                  <CardDescription>Breakdown of your interview sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  {interviewTypeData.some((d) => d.value > 0) ? (
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={interviewTypeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        >
                          {interviewTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-[200px] flex items-center justify-center">
                      <span className="text-muted-foreground">No data available yet</span>
                    </div>
                  )}
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
                      Begin with a basic technical interview covering fundamental concepts for your role.
                    </p>
                    <Button className="mt-4" asChild>
                      <Link href="/interviews/new?type=fundamentals">Start Fundamentals Interview</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Practice STAR Method</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      The STAR method (Situation, Task, Action, Result) is essential for behavioral interviews.
                    </p>
                    <Button className="mt-4" asChild>
                      <Link href="/interviews/new?type=star">Practice STAR Method</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Complete Your Profile</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      For more personalized questions and feedback, complete your profile.
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