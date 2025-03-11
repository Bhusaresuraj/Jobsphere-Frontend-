"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUserStore } from "@/store/useUserStore"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Building, Briefcase, Star, Calendar, PlusCircle } from "lucide-react"
import Link from "next/link"

interface Template {
  id: number
  name: string
  job_role: string
  industry: string
  seniority_level: string
  years_of_experience: number
  interview_types: string[]
  skills: string[]
  session_duration: number
  num_questions: number
  created_at: string
  // ... other fields
}

export default function TemplatesPage() {
  const router = useRouter()
  const { accessToken } = useUserStore()
  const [templates, setTemplates] = useState<Template[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/interview/templates/`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch templates')
        }

        const data = await response.json()
        setTemplates(data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError('Failed to load templates')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTemplates()
  }, [accessToken])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (error) {
    return <div className="text-destructive">{error}</div>
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle>{template.name}</CardTitle>
                <CardDescription>{template.job_role}</CardDescription>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{template.seniority_level}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{template.session_duration} minutes</span>
                </div>
                <div className="flex items-center text-sm">
                  <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{template.num_questions} questions</span>
                </div>
                <div className="flex items-center text-sm">
                  <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{template.industry}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full"
                onClick={() => router.push(`/interviews/${template.id}`)}
              >
                Start Interview
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card className="flex flex-col border-dashed border-2">
          <CardContent className="flex flex-col items-center justify-center h-full py-8">
            <PlusCircle className="h-8 w-8 text-muted-foreground mb-4" />
            <h3 className="font-medium text-center">Create Custom Interview</h3>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Design your own interview with specific questions and settings
            </p>
            <Button variant="outline" className="mt-4" asChild>
              <Link href="/createinterview">
                Create New
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

