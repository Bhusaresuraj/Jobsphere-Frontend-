"use client"

import { useState, useEffect, use } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mic,
  MicOff,
  Pause,
  Play,
  ThumbsDown,
  ThumbsUp,
  X,
  Upload,
} from "lucide-react"
import { useUserStore } from "@/store/useUserStore"

interface Template {
  id: number
  name: string
  job_role: string
  industry: string
  seniority_level: string
  years_of_experience: number
  target_company: string
  interview_types: string[]
  skills: string[]
  strengths: string[]
  weaknesses: string[]
  question_complexity: string
  question_categories: string[]
  session_duration: number
  num_questions: number
  questions: {
    questions: string[]
  }
  // ... other fields
}

interface InterviewData {
  questions: {
    questions: string[]
  }
  duration_minutes: number
  template: Template
  // ... other fields
}

export default function InterviewPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise)
  const { accessToken } = useUserStore()
  const [template, setTemplate] = useState<Template | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [timeRemaining, setTimeRemaining] = useState(120) // 2 minutes in seconds
  const [isPaused, setIsPaused] = useState(true)
  const [feedback, setFeedback] = useState<null | {
    score: number
    strengths: string[]
    improvements: string[]
    transcript: string
  }>(null)
  const [isInterviewStarted, setIsInterviewStarted] = useState(false)
  const [interviewData, setInterviewData] = useState<InterviewData | null>(null)
  const [audioFiles, setAudioFiles] = useState<{ [key: number]: File }>({})

  // Fetch template data
  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/interview/templates/${params.id}/`,
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch template')
        }

        const data = await response.json()
        setTemplate(data)
        // Initialize timer with the template's session duration
        setTimeRemaining(data.session_duration * 60)
      } catch (err) {
        console.error('Fetch error:', err)
        setError('Failed to load interview template')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTemplate()
  }, [params.id, accessToken])

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (!isPaused && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      handleNextQuestion()
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isPaused, timeRemaining])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'audio/wav') {
      setAudioFiles(prev => ({
        ...prev,
        [currentQuestion]: file
      }))
      setIsRecording(true) // Use this to indicate a file is uploaded
    } else {
      setError('Please upload a .wav audio file')
    }
  }

  const submitRecordings = async () => {
    try {
      // Create array of objects in the required format
      const requestData = [
        {
          key: "session_id",
          value: params.id,
          type: "text"
        },
        // Create an entry for each audio file
        ...Object.entries(audioFiles).map(([_, file]) => ({
          key: "audio_files",
          type: "file",
          value: [file]
        }))
      ]

      const formData = new FormData()
      
      // Add session_id
      formData.append('session_id', params.id)

      // Add each audio file as a separate entry
      Object.values(audioFiles).forEach((file) => {
        formData.append('audio_files[]', file)
      })

      console.log('Submitting:', {
        sessionId: params.id,
        numberOfFiles: Object.keys(audioFiles).length,
        fileNames: Object.values(audioFiles).map(f => f.name),
        requestData: requestData
      })

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/interviews/submit/`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error('Failed to submit recordings')
      }

      const data = await response.json()
      console.log('Submission response:', data)
    } catch (err) {
      console.error('Error submitting recordings:', err)
      setError('Failed to submit recordings')
    }
  }

  const handleNextQuestion = () => {
    if (template && currentQuestion < template.num_questions) {
      generateMockFeedback()
      setCurrentQuestion((prev) => prev + 1)
      setTimeRemaining(120)
      setIsPaused(true)
    } else {
      // Submit recordings when interview is finished
      submitRecordings()
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1)
      setTimeRemaining(120)
      setIsRecording(false)
      setIsPaused(true)
      setFeedback(null)
    }
  }

  const generateMockFeedback = () => {
    // This would be replaced with actual AI feedback in a real implementation
    setFeedback({
      score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
      strengths: ["Good use of specific examples", "Clear communication style", "Logical structure to your answer"],
      improvements: [
        "Consider being more concise",
        "Add more technical details where appropriate",
        "Use the STAR method more consistently",
      ],
      transcript:
        "This is a simulated transcript of your answer. In a real implementation, this would be the actual text generated from your speech during the interview question response.",
    })
  }

  const startInterview = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/interview/interviews/start/`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            template_id: Number(params.id),
            job_role: template?.job_role || '',
            industry: template?.industry || '',
            is_timed: true,
            difficulty_level: 'medium'
          }),
        }
      )

      console.log('API Response Status:', response.status)
      const data = await response.json()
      console.log('API Response Data:', data)

      if (!response.ok) {
        throw new Error('Failed to start interview')
      }

      setInterviewData({
        ...data,
        questions: data.questions
      })
      setIsInterviewStarted(true)
      setTimeRemaining(data.duration_minutes * 60)
      setCurrentQuestion(1)
    } catch (err) {
      console.error('Error starting interview:', err)
      setError('Failed to start interview')
    }
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (error || !template) {
    return <div className="text-destructive">{error || 'Template not found'}</div>
  }

  // Parse questions from the template
  const questions = (isInterviewStarted && interviewData ? interviewData.questions.questions : template?.questions.questions)
    .filter((q: string) => q.startsWith('**Question:**'))
    .map((q: string) => q.replace('**Question:**', '').trim())

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" onClick={() => window.history.back()} className="mr-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Interviews
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{template.name}</h1>
          <p className="text-muted-foreground">{template.job_role} - {template.industry}</p>
        </div>
        {!isInterviewStarted && (
          <Button 
            onClick={startInterview} 
            className="ml-4"
            variant="default"
          >
            Start Interview
          </Button>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>
                    Question {currentQuestion} of {template.num_questions}
                  </CardTitle>
                  <CardDescription>{template.job_role} Interview</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${isPaused ? "bg-muted" : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"}`}
                  >
                    <Clock className="h-3 w-3" />
                    <span>{formatTime(timeRemaining)}</span>
                  </div>
                  {!isPaused && (
                    <Button variant="ghost" size="sm" onClick={() => setIsRecording(false)}>
                      <Pause className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg mb-6">{questions[currentQuestion - 1]}</div>

              <div className="flex justify-center items-center h-40 bg-muted rounded-lg mb-4">
                {audioFiles[currentQuestion] ? (
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <CheckCircle2 className="h-12 w-12 text-primary" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      File uploaded: {audioFiles[currentQuestion].name}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Upload a .wav file for this question</p>
                  </div>
                )}
              </div>

              <div className="flex justify-center space-x-4">
                <input
                  type="file"
                  accept=".wav"
                  onChange={handleFileUpload}
                  className="hidden"
                  id={`file-upload-${currentQuestion}`}
                />
                <Button 
                  variant={audioFiles[currentQuestion] ? "destructive" : "default"} 
                  onClick={() => {
                    if (audioFiles[currentQuestion]) {
                      // Remove the file
                      const newFiles = { ...audioFiles }
                      delete newFiles[currentQuestion]
                      setAudioFiles(newFiles)
                      setIsRecording(false)
                    } else {
                      // Trigger file input
                      document.getElementById(`file-upload-${currentQuestion}`)?.click()
                    }
                  }} 
                  className="w-40"
                >
                  {audioFiles[currentQuestion] ? (
                    <>
                      <X className="mr-2 h-4 w-4" />
                      Remove File
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Answer
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 1}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={handleNextQuestion}>
                {currentQuestion === template.num_questions ? (
                  isRecording ? "Stop and Finish" : "Submit Interview"
                ) : (
                  <>
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {feedback && (
            <Card>
              <CardHeader>
                <CardTitle>AI Feedback</CardTitle>
                <CardDescription>Analysis of your response to Question {currentQuestion}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Overall Score</h3>
                      <span className="text-sm font-medium">{feedback.score}%</span>
                    </div>
                    <Progress value={feedback.score} className="h-2" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="font-medium flex items-center text-green-600 mb-2">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Strengths
                      </h3>
                      <ul className="space-y-1">
                        {feedback.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium flex items-center text-amber-600 mb-2">
                        <ThumbsDown className="mr-2 h-4 w-4" />
                        Areas for Improvement
                      </h3>
                      <ul className="space-y-1">
                        {feedback.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-amber-600 mt-0.5" />
                            <span className="text-sm">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Transcript</h3>
                    <div className="p-3 bg-muted rounded-md text-sm">{feedback.transcript}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Interview Progress</CardTitle>
              <CardDescription>
                {template.seniority_level} {template.job_role} Interview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex items-center ${currentQuestion === index + 1 ? "text-primary font-medium" : index + 1 < currentQuestion ? "text-muted-foreground" : "text-muted-foreground"}`}
                      >
                        <div
                          className={`flex items-center justify-center w-6 h-6 rounded-full mr-2 text-xs ${
                            currentQuestion === index + 1
                              ? "bg-primary text-primary-foreground"
                              : index + 1 < currentQuestion
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="text-sm truncate max-w-[200px]">
                          {question.length > 40 ? `${question.substring(0, 40)}...` : question}
                        </span>
                      </div>
                      {index + 1 < currentQuestion && <CheckCircle2 className="h-4 w-4 text-primary" />}
                    </div>
                    {index < questions.length - 1 && <div className="ml-3 border-l border-muted h-4"></div>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Interview Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Use the STAR Method</h3>
                  <p className="text-sm text-muted-foreground">
                    Structure your answers with Situation, Task, Action, and Result for clarity.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Be Specific</h3>
                  <p className="text-sm text-muted-foreground">
                    Use concrete examples and metrics to demonstrate your impact.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Watch Your Pace</h3>
                  <p className="text-sm text-muted-foreground">
                    Speak clearly and at a moderate pace. Avoid rushing through answers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

