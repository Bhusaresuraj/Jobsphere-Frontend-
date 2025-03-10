"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import type { InterviewConfig } from "@/components/interview-config-form"

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Media",
  "Government",
  "Non-profit",
  "Other",
]

const seniorityLevels = ["Entry-level", "Mid-level", "Senior", "Executive"]

interface JobRoleConfigProps {
  config: InterviewConfig["jobRole"]
  updateConfig: (data: Partial<InterviewConfig["jobRole"]>) => void
}

export function JobRoleConfig({ config, updateConfig }: JobRoleConfigProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Job Role Information</h3>
        <p className="text-sm text-muted-foreground">Provide details about the job role you're preparing for</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="jobTitle">Role Title</Label>
          <Input
            id="jobTitle"
            placeholder="e.g. Software Engineer, Product Manager"
            value={config.title}
            onChange={(e) => updateConfig({ title: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select value={config.industry} onValueChange={(value) => updateConfig({ industry: value })}>
            <SelectTrigger id="industry">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="seniority">Seniority Level</Label>
          <Select value={config.seniorityLevel} onValueChange={(value) => updateConfig({ seniorityLevel: value })}>
            <SelectTrigger id="seniority">
              <SelectValue placeholder="Select seniority level" />
            </SelectTrigger>
            <SelectContent>
              {seniorityLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Years of Experience</Label>
          <div className="pt-2">
            <Slider
              id="experience"
              min={0}
              max={20}
              step={1}
              value={[config.experience]}
              onValueChange={(value) => updateConfig({ experience: value[0] })}
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-muted-foreground">0</span>
              <span className="text-sm font-medium">{config.experience} years</span>
              <span className="text-sm text-muted-foreground">20+</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="targetCompany">Target Company (Optional)</Label>
          <Input
            id="targetCompany"
            placeholder="e.g. Google, Amazon, etc."
            value={config.targetCompany}
            onChange={(e) => updateConfig({ targetCompany: e.target.value })}
          />
          <p className="text-xs text-muted-foreground">
            Specify a company to tailor questions for their interview style
          </p>
        </div>
      </div>
    </div>
  )
}

