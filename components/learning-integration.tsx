"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { InterviewConfig } from "@/components/interview-config-form"

interface LearningIntegrationProps {
  config: InterviewConfig["learningIntegration"]
  updateConfig: (data: Partial<InterviewConfig["learningIntegration"]>) => void
}

export function LearningIntegration({ config, updateConfig }: LearningIntegrationProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Learning Integration</h3>
        <p className="text-sm text-muted-foreground">Configure learning features to improve your interview skills</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="knowledgeGapAnalysis">Knowledge Gap Analysis</Label>
            <p className="text-sm text-muted-foreground">Analyze and identify knowledge gaps in your responses</p>
          </div>
          <Switch
            id="knowledgeGapAnalysis"
            checked={config.knowledgeGapAnalysis}
            onCheckedChange={(checked) => updateConfig({ knowledgeGapAnalysis: checked })}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="resourceIntegration">Resource Integration</Label>
            <p className="text-sm text-muted-foreground">Include relevant learning resources with feedback</p>
          </div>
          <Switch
            id="resourceIntegration"
            checked={config.resourceIntegration}
            onCheckedChange={(checked) => updateConfig({ resourceIntegration: checked })}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="improvementTracking">Improvement Tracking</Label>
            <p className="text-sm text-muted-foreground">Compare performance with previous interview sessions</p>
          </div>
          <Switch
            id="improvementTracking"
            checked={config.improvementTracking}
            onCheckedChange={(checked) => updateConfig({ improvementTracking: checked })}
          />
        </div>
      </div>
    </div>
  )
}

