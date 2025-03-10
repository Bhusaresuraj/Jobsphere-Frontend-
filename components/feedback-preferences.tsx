"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import type { InterviewConfig } from "@/components/interview-config-form"

interface FeedbackPreferencesProps {
  config: InterviewConfig["feedbackPreferences"]
  updateConfig: (data: Partial<InterviewConfig["feedbackPreferences"]>) => void
}

const feedbackAreas = [
  { id: "communication", label: "Communication clarity" },
  { id: "structure", label: "Answer structure" },
  { id: "technical", label: "Technical accuracy" },
  { id: "confidence", label: "Confidence indicators" },
  { id: "body-language", label: "Body language suggestions" },
]

export function FeedbackPreferences({ config, updateConfig }: FeedbackPreferencesProps) {
  const toggleFocusArea = (areaId: string) => {
    if (config.focusAreas.includes(areaId)) {
      updateConfig({ focusAreas: config.focusAreas.filter((a) => a !== areaId) })
    } else {
      updateConfig({ focusAreas: [...config.focusAreas, areaId] })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Feedback Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Configure how you would like to receive feedback on your interview performance
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Feedback Depth</Label>
          <RadioGroup value={config.depth} onValueChange={(value) => updateConfig({ depth: value })}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="basic" id="basic" />
              <Label htmlFor="basic">Basic - Quick overview of performance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard">Standard - Detailed feedback with suggestions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comprehensive" id="comprehensive" />
              <Label htmlFor="comprehensive">Comprehensive - In-depth analysis with examples</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Focus Areas</Label>
          <div className="grid gap-3 sm:grid-cols-2">
            {feedbackAreas.map((area) => (
              <div key={area.id} className="flex items-center space-x-2">
                <Checkbox
                  id={area.id}
                  checked={config.focusAreas.includes(area.id)}
                  onCheckedChange={() => toggleFocusArea(area.id)}
                />
                <label
                  htmlFor={area.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {area.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="realTimeFeedback">Real-time Feedback</Label>
            <p className="text-sm text-muted-foreground">Receive feedback during the interview instead of after</p>
          </div>
          <Switch
            id="realTimeFeedback"
            checked={config.realTimeFeedback}
            onCheckedChange={(checked) => updateConfig({ realTimeFeedback: checked })}
          />
        </div>
      </div>
    </div>
  )
}

