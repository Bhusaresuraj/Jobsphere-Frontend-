"use client"

import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"

interface InterviewTypeSelectionProps {
  selected: string[]
  updateConfig: (selected: string[]) => void
}

const interviewTypes = [
  {
    id: "behavioral",
    title: "Behavioral Interview",
    description: "Questions about past experiences and how you handled specific situations",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "technical",
    title: "Technical Interview",
    description: "Questions to assess your technical knowledge and problem-solving skills",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "competency",
    title: "Competency-based Interview",
    description: "Questions focused on specific skills and competencies required for the role",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "case-study",
    title: "Case Study Interview",
    description: "Scenarios where you analyze a problem and propose solutions",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "panel",
    title: "Panel Interview Simulation",
    description: "Simulation of an interview with multiple interviewers asking questions",
    icon: "/placeholder.svg?height=40&width=40",
  },
]

export function InterviewTypeSelection({ selected, updateConfig }: InterviewTypeSelectionProps) {
  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      updateConfig(selected.filter((item) => item !== id))
    } else {
      updateConfig([...selected, id])
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Interview Type Selection</h3>
        <p className="text-sm text-muted-foreground">Select one or more interview formats to prepare for</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {interviewTypes.map((type) => (
          <Card
            key={type.id}
            className={`p-4 cursor-pointer transition-all ${
              selected.includes(type.id) ? "border-primary bg-primary/5" : "hover:border-primary/50"
            }`}
            onClick={() => toggleSelection(type.id)}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <img src={type.icon || "/placeholder.svg"} alt="" className="w-10 h-10 rounded-md" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{type.title}</h4>
                  {selected.includes(type.id) && <Check className="h-5 w-5 text-primary" />}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        Selected:{" "}
        {selected.length > 0 ? selected.map((id) => interviewTypes.find((t) => t.id === id)?.title).join(", ") : "None"}
      </p>
    </div>
  )
}

