"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Calendar } from "lucide-react"
import type { InterviewConfig } from "@/components/interview-config-form"
import { format } from "date-fns"

interface PreviewSummaryProps {
  config: InterviewConfig
}

export function PreviewSummary({ config }: PreviewSummaryProps) {
  const interviewTypeMap: Record<string, string> = {
    behavioral: "Behavioral Interview",
    technical: "Technical Interview",
    competency: "Competency-based Interview",
    "case-study": "Case Study Interview",
    panel: "Panel Interview Simulation",
  }

  const questionCategoryMap: Record<string, string> = {
    technical: "Technical questions",
    leadership: "Leadership scenarios",
    "problem-solving": "Problem-solving challenges",
    "cultural-fit": "Cultural fit assessment",
    situational: "Situational judgment questions",
  }

  const feedbackAreaMap: Record<string, string> = {
    communication: "Communication clarity",
    structure: "Answer structure",
    technical: "Technical accuracy",
    confidence: "Confidence indicators",
    "body-language": "Body language suggestions",
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Interview Configuration Summary</h3>
        <p className="text-sm text-muted-foreground">Review your interview configuration before starting</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Job Role</CardTitle>
            <CardDescription>Role and industry details</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-medium">Role Title:</dt>
                <dd>{config.jobRole.title || "Not specified"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Industry:</dt>
                <dd>{config.jobRole.industry || "Not specified"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Seniority:</dt>
                <dd>{config.jobRole.seniorityLevel}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Experience:</dt>
                <dd>{config.jobRole.experience} years</dd>
              </div>
              {config.jobRole.targetCompany && (
                <div className="flex justify-between">
                  <dt className="font-medium">Target Company:</dt>
                  <dd>{config.jobRole.targetCompany}</dd>
                </div>
              )}
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Interview Format</CardTitle>
            <CardDescription>Selected interview types</CardDescription>
          </CardHeader>
          <CardContent>
            {config.interviewTypes.length > 0 ? (
              <ul className="space-y-1">
                {config.interviewTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{interviewTypeMap[type] || type}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No interview types selected</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Content Customization</CardTitle>
            <CardDescription>Skills and question preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {config.contentCustomization.skills.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-1">Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {config.contentCustomization.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-sm font-medium mb-1">Complexity:</h4>
              <span>
                {
                  ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"][
                    config.contentCustomization.complexity - 1
                  ]
                }
              </span>
            </div>

            {config.contentCustomization.categories.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-1">Question Categories:</h4>
                <ul className="space-y-1">
                  {config.contentCustomization.categories.map((category) => (
                    <li key={category} className="text-sm">
                      • {questionCategoryMap[category] || category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Session Parameters</CardTitle>
            <CardDescription>Duration and question settings</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-medium">Duration:</dt>
                <dd>{config.sessionParameters.duration} minutes</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Questions:</dt>
                <dd>{config.sessionParameters.questionQuantity}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Time Pressure:</dt>
                <dd>{config.sessionParameters.timePressure ? "Enabled" : "Disabled"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium">Follow-up Questions:</dt>
                <dd>{config.sessionParameters.followUpQuestions ? "Enabled" : "Disabled"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Feedback & Learning</CardTitle>
            <CardDescription>Feedback preferences and learning options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="text-sm font-medium mb-1">Feedback Depth:</h4>
              <span className="capitalize">{config.feedbackPreferences.depth}</span>
            </div>

            {config.feedbackPreferences.focusAreas.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-1">Focus Areas:</h4>
                <div className="flex flex-wrap gap-1">
                  {config.feedbackPreferences.focusAreas.map((area) => (
                    <Badge key={area} variant="secondary">
                      {feedbackAreaMap[area] || area}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-sm font-medium mb-1">Learning Features:</h4>
              <ul className="space-y-1">
                {config.learningIntegration.knowledgeGapAnalysis && (
                  <li className="text-sm">• Knowledge Gap Analysis</li>
                )}
                {config.learningIntegration.resourceIntegration && <li className="text-sm">• Resource Integration</li>}
                {config.learningIntegration.improvementTracking && <li className="text-sm">• Improvement Tracking</li>}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Technical & Scheduling</CardTitle>
            <CardDescription>Technical setup and timing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="text-sm font-medium mb-1">Technical Setup:</h4>
              <ul className="space-y-1">
                {config.technicalSetup.audioVideo && <li className="text-sm">• Audio/Video Enabled</li>}
                {config.technicalSetup.recording && <li className="text-sm">• Session Recording</li>}
                {config.technicalSetup.transcription && <li className="text-sm">• Transcription Enabled</li>}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">AI Interviewer:</h4>
              <span>
                {config.aiInterviewer.style} {config.aiInterviewer.persona} ({config.aiInterviewer.accent})
              </span>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">Scheduling:</h4>
              {config.scheduling.immediate ? (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Start immediately</span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {config.scheduling.scheduledTime
                      ? format(config.scheduling.scheduledTime, "PPP 'at' p")
                      : "Not scheduled yet"}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted p-4 rounded-md">
        <p className="text-sm">
          <strong>Estimated completion time:</strong> {config.sessionParameters.duration + 10} minutes (including setup
          and feedback)
        </p>
      </div>
    </div>
  )
}

