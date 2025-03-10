"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import type { InterviewConfig } from "@/components/interview-config-form"

interface SessionParametersProps {
  config: InterviewConfig["sessionParameters"]
  updateConfig: (data: Partial<InterviewConfig["sessionParameters"]>) => void
}

export function SessionParameters({ config, updateConfig }: SessionParametersProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Interview Session Parameters</h3>
        <p className="text-sm text-muted-foreground">Configure the parameters for your interview session</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Session Duration (minutes)</Label>
          <div className="pt-2">
            <Slider
              min={15}
              max={60}
              step={5}
              value={[config.duration]}
              onValueChange={(value) => updateConfig({ duration: value[0] })}
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-muted-foreground">15 min</span>
              <span className="text-sm font-medium">{config.duration} minutes</span>
              <span className="text-sm text-muted-foreground">60 min</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Number of Questions</Label>
          <div className="pt-2">
            <Slider
              min={5}
              max={20}
              step={1}
              value={[config.questionQuantity]}
              onValueChange={(value) => updateConfig({ questionQuantity: value[0] })}
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-muted-foreground">5</span>
              <span className="text-sm font-medium">{config.questionQuantity} questions</span>
              <span className="text-sm text-muted-foreground">20</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="timePressure">Time Pressure</Label>
              <p className="text-sm text-muted-foreground">Set time limits for each question</p>
            </div>
            <Switch
              id="timePressure"
              checked={config.timePressure}
              onCheckedChange={(checked) => updateConfig({ timePressure: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="followUpQuestions">Follow-up Questions</Label>
              <p className="text-sm text-muted-foreground">AI will ask follow-up questions based on your responses</p>
            </div>
            <Switch
              id="followUpQuestions"
              checked={config.followUpQuestions}
              onCheckedChange={(checked) => updateConfig({ followUpQuestions: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="interruptionSimulation">Interruption Simulation</Label>
              <p className="text-sm text-muted-foreground">Simulate realistic interview interruptions</p>
            </div>
            <Switch
              id="interruptionSimulation"
              checked={config.interruptionSimulation}
              onCheckedChange={(checked) => updateConfig({ interruptionSimulation: checked })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

