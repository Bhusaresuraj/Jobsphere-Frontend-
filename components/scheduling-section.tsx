"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import type { InterviewConfig } from "@/components/interview-config-form"

interface SchedulingSectionProps {
  config: InterviewConfig["scheduling"]
  updateConfig: (data: Partial<InterviewConfig["scheduling"]>) => void
}

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
]

export function SchedulingSection({ config, updateConfig }: SchedulingSectionProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(config.scheduledTime)

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date)
    if (date && selectedTime) {
      const [hours, minutes] = selectedTime.split(":").map(Number)
      const scheduledTime = new Date(date)
      scheduledTime.setHours(hours, minutes)
      updateConfig({ scheduledTime: scheduledTime })
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (selectedDate && time) {
      const [hours, minutes] = time.split(":").map(Number)
      const scheduledTime = new Date(selectedDate)
      scheduledTime.setHours(hours, minutes)
      updateConfig({ scheduledTime: scheduledTime })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Scheduling</h3>
        <p className="text-sm text-muted-foreground">Schedule your interview session</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Interview Timing</Label>
          <RadioGroup
            value={config.immediate ? "immediate" : "scheduled"}
            onValueChange={(value) => updateConfig({ immediate: value === "immediate" })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="immediate" id="immediate" />
              <Label htmlFor="immediate">Start immediately</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="scheduled" id="scheduled" />
              <Label htmlFor="scheduled">Schedule for later</Label>
            </div>
          </RadioGroup>
        </div>

        {!config.immediate && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate || undefined}
                      onSelect={(date: Date | undefined) => handleDateSelect(date || null)}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Select Time</Label>
                <Select value={selectedTime || ""} onValueChange={handleTimeSelect} disabled={!selectedDate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reminders">Enable Reminders</Label>
                <p className="text-sm text-muted-foreground">Receive notifications before your scheduled interview</p>
              </div>
              <Switch
                id="reminders"
                checked={config.reminders}
                onCheckedChange={(checked) => updateConfig({ reminders: checked })}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

