"use client"

import { useState, useEffect } from "react"
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
} from "lucide-react"

export default function InterviewPage({ params }: { params: { id: string } }) {
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

  // Mock questions for the interview
  const questions = [
    "Tell me about a challenging project you worked on and how you overcame obstacles.",
    "Explain how you would design a scalable web application architecture.",
    "How do you stay updated with the latest technologies in your field?",
    "Describe a situation where you had to work with a difficult team member.",
    "What's your approach to debugging complex issues in production?",
  ]

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

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    setIsPaused(false)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      // Generate mock feedback for the current question
      generateMockFeedback()

      // Move to next question
      setCurrentQuestion((prev) => prev + 1)
      setTimeRemaining(120)
      setIsRecording(false)
      setIsPaused(true)
    } else {
      // End of interview
      generateMockFeedback()
      // Would navigate to results page in a real app
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

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" onClick={() => window.history.back()} className="mr-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Interviews
        </Button>
        <h1 className="text-2xl font-bold">Technical Interview Practice</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>
                    Question {currentQuestion} of {questions.length}
                  </CardTitle>
                  <CardDescription>Frontend Developer Interview</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${isPaused ? "bg-muted" : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"}`}
                  >
                    <Clock className="h-3 w-3" />
                    <span>{formatTime(timeRemaining)}</span>
                  </div>
                  {!isPaused && (
                    <Button variant="ghost" size="sm" onClick={togglePause}>
                      <Pause className="h-4 w-4" />
                    </Button>
                  )}
                  {isPaused && timeRemaining < 120 && (
                    <Button variant="ghost" size="sm" onClick={togglePause}>
                      <Play className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg mb-6">{questions[currentQuestion - 1]}</div>

              <div className="flex justify-center items-center h-40 bg-muted rounded-lg mb-4">
                {isRecording ? (
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <Mic className="h-12 w-12 text-primary animate-pulse" />
                      <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500"></span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Recording your answer...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <MicOff className="h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Click record to start answering</p>
                  </div>
                )}
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant={isRecording ? "destructive" : "default"} onClick={toggleRecording} className="w-40">
                  {isRecording ? (
                    <>
                      <X className="mr-2 h-4 w-4" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Mic className="mr-2 h-4 w-4" />
                      Record Answer
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
                {currentQuestion === questions.length ? "Finish" : "Next"}
                {currentQuestion !== questions.length && <ChevronRight className="ml-2 h-4 w-4" />}
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
              <CardDescription>Track your progress through the interview</CardDescription>
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

