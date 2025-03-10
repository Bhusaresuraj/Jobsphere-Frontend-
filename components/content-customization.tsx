"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { InterviewConfig } from "@/components/interview-config-form"

interface ContentCustomizationProps {
  config: InterviewConfig["contentCustomization"]
  updateConfig: (data: Partial<InterviewConfig["contentCustomization"]>) => void
}

const questionCategories = [
  { id: "technical", label: "Role-specific technical questions" },
  { id: "leadership", label: "Leadership/management scenarios" },
  { id: "problem-solving", label: "Problem-solving challenges" },
  { id: "cultural-fit", label: "Cultural fit assessment" },
  { id: "situational", label: "Situational judgment questions" },
]

export function ContentCustomization({ config, updateConfig }: ContentCustomizationProps) {
  const [newSkill, setNewSkill] = useState("")
  const [newStrength, setNewStrength] = useState("")
  const [newWeakness, setNewWeakness] = useState("")

  const addSkill = () => {
    if (newSkill.trim() && !config.skills.includes(newSkill.trim())) {
      updateConfig({ skills: [...config.skills, newSkill.trim()] })
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    updateConfig({ skills: config.skills.filter((s) => s !== skill) })
  }

  const addStrength = () => {
    if (newStrength.trim() && !config.strengths.includes(newStrength.trim())) {
      updateConfig({ strengths: [...config.strengths, newStrength.trim()] })
      setNewStrength("")
    }
  }

  const removeStrength = (strength: string) => {
    updateConfig({ strengths: config.strengths.filter((s) => s !== strength) })
  }

  const addWeakness = () => {
    if (newWeakness.trim() && !config.weaknesses.includes(newWeakness.trim())) {
      updateConfig({ weaknesses: [...config.weaknesses, newWeakness.trim()] })
      setNewWeakness("")
    }
  }

  const removeWeakness = (weakness: string) => {
    updateConfig({ weaknesses: config.weaknesses.filter((w) => w !== weakness) })
  }

  const toggleCategory = (categoryId: string) => {
    if (config.categories.includes(categoryId)) {
      updateConfig({ categories: config.categories.filter((c) => c !== categoryId) })
    } else {
      updateConfig({ categories: [...config.categories, categoryId] })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Content Customization</h3>
        <p className="text-sm text-muted-foreground">Customize the content of your interview questions</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Skills Assessment</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Add a relevant skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addSkill()}
            />
            <Button type="button" onClick={addSkill} variant="secondary">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {config.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                {skill}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
              </Badge>
            ))}
            {config.skills.length === 0 && <span className="text-sm text-muted-foreground">No skills added yet</span>}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label>Strengths</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a strength"
                value={newStrength}
                onChange={(e) => setNewStrength(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addStrength()}
              />
              <Button type="button" onClick={addStrength} variant="secondary">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {config.strengths.map((strength) => (
                <Badge key={strength} variant="secondary" className="flex items-center gap-1">
                  {strength}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeStrength(strength)} />
                </Badge>
              ))}
              {config.strengths.length === 0 && (
                <span className="text-sm text-muted-foreground">No strengths added yet</span>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Weaknesses</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a weakness"
                value={newWeakness}
                onChange={(e) => setNewWeakness(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addWeakness()}
              />
              <Button type="button" onClick={addWeakness} variant="secondary">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {config.weaknesses.map((weakness) => (
                <Badge key={weakness} variant="secondary" className="flex items-center gap-1">
                  {weakness}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeWeakness(weakness)} />
                </Badge>
              ))}
              {config.weaknesses.length === 0 && (
                <span className="text-sm text-muted-foreground">No weaknesses added yet</span>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Question Complexity</Label>
          <div className="pt-2">
            <Slider
              min={1}
              max={5}
              step={1}
              value={[config.complexity]}
              onValueChange={(value) => updateConfig({ complexity: value[0] })}
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-muted-foreground">Beginner</span>
              <span className="text-sm font-medium">
                {["Beginner", "Basic", "Intermediate", "Advanced", "Expert"][config.complexity - 1]}
              </span>
              <span className="text-sm text-muted-foreground">Expert</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Question Categories</Label>
          <div className="grid gap-3 sm:grid-cols-2">
            {questionCategories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={config.categories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

