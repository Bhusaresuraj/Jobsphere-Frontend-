import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, Filter, Mic, PlusCircle, Search, Settings, Star } from "lucide-react"

export default function InterviewsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Mock Interviews</h2>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search interviews..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Interviews</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="saved">Saved Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>Frontend Developer</CardTitle>
                    <CardDescription>Technical Interview</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>25 questions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mic className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Speech analysis enabled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Interview</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>System Design</CardTitle>
                    <CardDescription>Senior Level</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>45 minutes</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>10 in-depth questions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mic className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Speech analysis enabled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Interview</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>Behavioral</CardTitle>
                    <CardDescription>Leadership Focus</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">4.7</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>40 minutes</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>15 STAR method questions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mic className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Speech analysis enabled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Interview</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>Data Science</CardTitle>
                    <CardDescription>ML Focus</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">4.6</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>50 minutes</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>20 technical questions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mic className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Speech analysis enabled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Interview</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>Product Management</CardTitle>
                    <CardDescription>Mid-Senior Level</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>45 minutes</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>18 scenario questions</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mic className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Speech analysis enabled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Interview</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-dashed border-2">
                <CardContent className="flex flex-col items-center justify-center h-full py-8">
                  <PlusCircle className="h-8 w-8 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-center">Create Custom Interview</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Design your own interview with specific questions and settings
                  </p>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link href="/creatinterview">
                      Create New
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>Mock Interview with AI Coach</CardTitle>
                    <CardDescription>Frontend Developer</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Tomorrow</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>10:00 AM - 11:00 AM</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Technical + Behavioral</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Reschedule</Button>
                  <Button>Join</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>System Design Practice</CardTitle>
                    <CardDescription>Senior Engineer</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Friday</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>2:00 PM - 3:30 PM</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>System Design Focus</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Reschedule</Button>
                  <Button>Join</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>Frontend Developer</CardTitle>
                    <CardDescription>React & Next.js</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">82%</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Completed 2 days ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>25 questions</span>
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                      <span>Strong technical knowledge</span>
                    </div>
                    <div className="flex items-center text-sm text-amber-600">
                      <span>Needs improvement: Communication clarity</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Report</Button>
                  <Button>Retry</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>System Design</CardTitle>
                    <CardDescription>Distributed Systems</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">75%</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Completed 5 days ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>10 in-depth questions</span>
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                      <span>Strong problem-solving approach</span>
                    </div>
                    <div className="flex items-center text-sm text-amber-600">
                      <span>Needs improvement: Scalability considerations</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Report</Button>
                  <Button>Retry</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>Behavioral</CardTitle>
                    <CardDescription>Leadership & Teamwork</CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">68%</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Completed 1 week ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>15 STAR method questions</span>
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                      <span>Strong on conflict resolution</span>
                    </div>
                    <div className="flex items-center text-sm text-amber-600">
                      <span>Needs improvement: Structured responses</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Report</Button>
                  <Button>Retry</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Frontend Developer Template</CardTitle>
                  <CardDescription>Saved 2 weeks ago</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Custom question set</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button>Use Template</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Quick Technical Screen</CardTitle>
                  <CardDescription>Saved 1 month ago</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>15 minutes</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Rapid-fire questions</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button>Use Template</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-dashed border-2">
                <CardContent className="flex flex-col items-center justify-center h-full py-8">
                  <PlusCircle className="h-8 w-8 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-center">Save New Template</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Create and save a custom interview template
                  </p>
                  <Button variant="outline" className="mt-4">
                    Create Template
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

