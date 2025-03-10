"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { InterviewConfig } from "@/components/interview-config-form"

interface AIInterviewerCustomizationProps {
  config: InterviewConfig["aiInterviewer"]
  updateConfig: (data: Partial<InterviewConfig["aiInterviewer"]>) => void
}

const interviewerPersonas = ["Professional", "Friendly", "Technical Expert", "HR Specialist", "Executive"]

const accentOptions = ["Standard", "British", "Australian", "Indian", "American"]

export function AIInterviewerCustomization({ config, updateConfig }: AIInterviewerCustomizationProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">AI Interviewer Customization</h3>
        <p className="text-sm text-muted-foreground">Customize the AI interviewer's style and personality</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Interviewer Style</Label>
          <RadioGroup value={config.style} onValueChange={(value) => updateConfig({ style: value })}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Friendly" id="friendly" />
              <Label htmlFor="friendly">Friendly - Supportive and encouraging</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Neutral" id="neutral" />
              <Label htmlFor="neutral">Neutral - Professional and balanced</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Challenging" id="challenging" />
              <Label htmlFor="challenging">Challenging - Pushes you with difficult questions</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label htmlFor="persona">Interviewer Persona</Label>
          <Select value={config.persona} onValueChange={(value) => updateConfig({ persona: value })}>
            <SelectTrigger id="persona">
              <SelectValue placeholder="Select a persona" />
            </SelectTrigger>
            <SelectContent>
              {interviewerPersonas.map((persona) => (
                <SelectItem key={persona} value={persona}>
                  {persona}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label htmlFor="accent">Accent/Language</Label>
          <Select value={config.accent} onValueChange={(value) => updateConfig({ accent: value })}>
            <SelectTrigger id="accent">
              <SelectValue placeholder="Select an accent" />
            </SelectTrigger>
            <SelectContent>
              {accentOptions.map((accent) => (
                <SelectItem key={accent} value={accent}>
                  {accent}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

