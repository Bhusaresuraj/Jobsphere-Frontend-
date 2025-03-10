"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Mic, Video, AlertCircle } from "lucide-react"
import type { InterviewConfig } from "@/components/interview-config-form"

interface TechnicalSetupProps {
  config: InterviewConfig["technicalSetup"]
  updateConfig: (data: Partial<InterviewConfig["technicalSetup"]>) => void
}

export function TechnicalSetup({ config, updateConfig }: TechnicalSetupProps) {
  const testMicrophone = () => {
    // In a real app, this would test the microphone
    alert("Testing microphone...")
  }

  const testCamera = () => {
    // In a real app, this would test the camera
    alert("Testing camera...")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Technical Setup</h3>
        <p className="text-sm text-muted-foreground">Configure technical aspects of your interview session</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="audioVideo">Enable Audio/Video</Label>
            <p className="text-sm text-muted-foreground">
              Use microphone and camera for a more realistic interview experience
            </p>
          </div>
          <Switch
            id="audioVideo"
            checked={config.audioVideo}
            onCheckedChange={(checked) => updateConfig({ audioVideo: checked })}
          />
        </div>

        {config.audioVideo && (
          <div className="bg-muted/50 p-4 rounded-md space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Test your microphone and camera before starting the interview
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={testMicrophone} className="flex items-center gap-2">
                <Mic className="h-4 w-4" />
                Test Microphone
              </Button>
              <Button variant="outline" size="sm" onClick={testCamera} className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Test Camera
              </Button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="recording">Record Session</Label>
            <p className="text-sm text-muted-foreground">Record the interview session for later review</p>
          </div>
          <Switch
            id="recording"
            checked={config.recording}
            onCheckedChange={(checked) => updateConfig({ recording: checked })}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="transcription">Enable Transcription</Label>
            <p className="text-sm text-muted-foreground">Generate a text transcript of the interview</p>
          </div>
          <Switch
            id="transcription"
            checked={config.transcription}
            onCheckedChange={(checked) => updateConfig({ transcription: checked })}
          />
        </div>
      </div>
    </div>
  )
}

