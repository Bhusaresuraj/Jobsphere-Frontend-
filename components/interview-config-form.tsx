"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { JobRoleConfig } from "@/components/job-role-config"
import { InterviewTypeSelection } from "@/components/interview-type-selection"
import { ContentCustomization } from "@/components/content-customization"
import { SessionParameters } from "@/components/session-parameters"
import { FeedbackPreferences } from "@/components/feedback-preferences"
import { LearningIntegration } from "@/components/learning-integration"
import { TechnicalSetup } from "@/components/technical-setup"
import { AIInterviewerCustomization } from "@/components/ai-interviewer-customization"
import { SchedulingSection } from "@/components/scheduling-section"
import { PreviewSummary } from "@/components/preview-summary"
import { ChevronLeft, ChevronRight, Save, Play } from "lucide-react"

export type InterviewConfig = {
  jobRole: {
    title: string
    industry: string
    seniorityLevel: string
    experience: number
    targetCompany: string
  }
  interviewTypes: string[]
  contentCustomization: {
    skills: string[]
    strengths: string[]
    weaknesses: string[]
    complexity: number
    categories: string[]
  }
  sessionParameters: {
    duration: number
    questionQuantity: number
    timePressure: boolean
    followUpQuestions: boolean
    interruptionSimulation: boolean
  }
  feedbackPreferences: {
    depth: string
    focusAreas: string[]
    realTimeFeedback: boolean
  }
  learningIntegration: {
    knowledgeGapAnalysis: boolean
    resourceIntegration: boolean
    improvementTracking: boolean
  }
  technicalSetup: {
    audioVideo: boolean
    recording: boolean
    transcription: boolean
  }
  aiInterviewer: {
    style: string
    persona: string
    accent: string
  }
  scheduling: {
    immediate: boolean
    scheduledTime: Date | null
    reminders: boolean
  }
}

const defaultConfig: InterviewConfig = {
  jobRole: {
    title: "",
    industry: "",
    seniorityLevel: "Mid-level",
    experience: 0,
    targetCompany: "",
  },
  interviewTypes: [],
  contentCustomization: {
    skills: [],
    strengths: [],
    weaknesses: [],
    complexity: 2,
    categories: [],
  },
  sessionParameters: {
    duration: 30,
    questionQuantity: 10,
    timePressure: false,
    followUpQuestions: true,
    interruptionSimulation: false,
  },
  feedbackPreferences: {
    depth: "standard",
    focusAreas: [],
    realTimeFeedback: false,
  },
  learningIntegration: {
    knowledgeGapAnalysis: true,
    resourceIntegration: true,
    improvementTracking: false,
  },
  technicalSetup: {
    audioVideo: true,
    recording: false,
    transcription: true,
  },
  aiInterviewer: {
    style: "Neutral",
    persona: "Professional",
    accent: "Standard",
  },
  scheduling: {
    immediate: true,
    scheduledTime: null,
    reminders: true,
  },
}

const steps = [
  "Job Role",
  "Interview Type",
  "Content",
  "Session",
  "Feedback",
  "Learning",
  "Technical",
  "AI Interviewer",
  "Scheduling",
  "Preview",
]

export function InterviewConfigForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [config, setConfig] = useState<InterviewConfig>(defaultConfig)

  const updateConfig = (section: keyof InterviewConfig, data: any) => {
    setConfig((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      },
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const saveTemplate = () => {
    // In a real app, this would save to a database or local storage
    console.log("Saving template:", config)
    alert("Template saved successfully!")
  }

  const startInterview = () => {
    // In a real app, this would navigate to the interview page
    console.log("Starting interview with config:", config)
    alert("Interview starting...")
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <JobRoleConfig config={config.jobRole} updateConfig={(data) => updateConfig("jobRole", data)} />
      case 1:
        return (
          <InterviewTypeSelection
            selected={config.interviewTypes}
            updateConfig={(data) => updateConfig("interviewTypes", data)}
          />
        )
      case 2:
        return (
          <ContentCustomization
            config={config.contentCustomization}
            updateConfig={(data) => updateConfig("contentCustomization", data)}
          />
        )
      case 3:
        return (
          <SessionParameters
            config={config.sessionParameters}
            updateConfig={(data) => updateConfig("sessionParameters", data)}
          />
        )
      case 4:
        return (
          <FeedbackPreferences
            config={config.feedbackPreferences}
            updateConfig={(data) => updateConfig("feedbackPreferences", data)}
          />
        )
      case 5:
        return (
          <LearningIntegration
            config={config.learningIntegration}
            updateConfig={(data) => updateConfig("learningIntegration", data)}
          />
        )
      case 6:
        return (
          <TechnicalSetup
            config={config.technicalSetup}
            updateConfig={(data) => updateConfig("technicalSetup", data)}
          />
        )
      case 7:
        return (
          <AIInterviewerCustomization
            config={config.aiInterviewer}
            updateConfig={(data) => updateConfig("aiInterviewer", data)}
          />
        )
      case 8:
        return (
          <SchedulingSection config={config.scheduling} updateConfig={(data) => updateConfig("scheduling", data)} />
        )
      case 9:
        return <PreviewSummary config={config} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{steps[currentStep]} Configuration</h2>
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
        <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
      </div>

      <Card className="p-6">{renderStep()}</Card>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>

        <div className="flex gap-2">
          <Button variant="outline" onClick={saveTemplate} className="flex items-center gap-2">
            <Save className="h-4 w-4" /> Save Template
          </Button>

          {currentStep === steps.length - 1 ? (
            <Button onClick={startInterview} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Play className="h-4 w-4" /> Start Interview
            </Button>
          ) : (
            <Button onClick={nextStep} className="flex items-center gap-2">
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

