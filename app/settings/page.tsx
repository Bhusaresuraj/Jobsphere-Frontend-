"use client"

import { useState, useEffect } from "react"
import { useUserStore } from "@/store/useUserStore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Download, Trash2, Upload, Loader2 } from "lucide-react"

// Constants for dropdown options
const INDUSTRY_OPTIONS = [
  { value: "Technology", label: "Technology" },
  { value: "Finance", label: "Finance" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Education", label: "Education" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Retail", label: "Retail" },
  { value: "Consulting", label: "Consulting" },
  { value: "Other", label: "Other" },
]

const JOB_ROLE_OPTIONS = [
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "Data Scientist", label: "Data Scientist" },
  { value: "Product Manager", label: "Product Manager" },
  { value: "UX Designer", label: "UX Designer" },
  { value: "Business Analyst", label: "Business Analyst" },
  { value: "Project Manager", label: "Project Manager" },
  { value: "DevOps Engineer", label: "DevOps Engineer" },
  { value: "Other", label: "Other" },
]

const TIMEZONE_OPTIONS = [
  { value: "UTC", label: "UTC" },
  { value: "IST", label: "IST (UTC+5:30)" },
  { value: "EST", label: "EST (UTC-5)" },
  { value: "PST", label: "PST (UTC-8)" },
  { value: "GMT", label: "GMT (UTC+0)" },
  { value: "JST", label: "JST (UTC+9)" },
]

export default function SettingsPage() {
  const { user, accessToken, setUser } = useUserStore()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isHydrated, setIsHydrated] = useState(false)
  const [formData, setFormData] = useState({
    phone_number: "",
    experience_level: "mid",
    industry: "",
    job_role: "",
    timezone: "UTC"
  })

  // Handle hydration
  useEffect(() => {
    if (user) {
      setFormData({
        phone_number: user.phone_number || "",
        experience_level: user.experience_level || "mid",
        industry: user.industry || "",
        job_role: user.job_role || "",
        timezone: user.timezone || "UTC"
      })
    }
    setIsHydrated(true)
  }, [user])

  // Don't render until hydrated
  if (!isHydrated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile/profile/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to update profile')
      }

      const updatedProfile = await response.json()
      setUser({ ...user, ...updatedProfile })
      // Show success message or toast here
    } catch (err) {
      console.error('Update error:', err)
      setError('Failed to update profile')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your profile information</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  {error && (
                    <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone_number">Phone Number</Label>
                      <Input
                        id="phone_number"
                        value={formData.phone_number}
                        onChange={(e) => handleChange('phone_number', e.target.value)}
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience_level">Experience Level</Label>
                      <Select 
                        value={formData.experience_level}
                        onValueChange={(value) => handleChange('experience_level', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="junior">Junior</SelectItem>
                          <SelectItem value="mid">Mid-Level</SelectItem>
                          <SelectItem value="senior">Senior</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select 
                        value={formData.industry}
                        onValueChange={(value) => handleChange('industry', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {INDUSTRY_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job_role">Job Role</Label>
                      <Select 
                        value={formData.job_role}
                        onValueChange={(value) => handleChange('job_role', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select job role" />
                        </SelectTrigger>
                        <SelectContent>
                          {JOB_ROLE_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select 
                        value={formData.timezone}
                        onValueChange={(value) => handleChange('timezone', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIMEZONE_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>

                  <div className="grid gap-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <Button>Update Password</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Connected Accounts</h3>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">G</div>
                        <div>
                          <p className="text-sm font-medium">Google</p>
                          <p className="text-xs text-muted-foreground">Connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Disconnect
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">L</div>
                        <div>
                          <p className="text-sm font-medium">LinkedIn</p>
                          <p className="text-xs text-muted-foreground">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Danger Zone</h3>

                  <div className="rounded-lg border border-destructive/50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Delete Account</p>
                        <p className="text-xs text-muted-foreground">
                          Permanently delete your account and all of your data
                        </p>
                      </div>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-updates">Interview Reminders</Label>
                      <p className="text-sm text-muted-foreground">Receive email reminders for scheduled interviews</p>
                    </div>
                    <Switch id="email-updates" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="space-y-0.5">
                      <Label htmlFor="weekly-summary">Weekly Progress Summary</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive a weekly summary of your interview practice
                      </p>
                    </div>
                    <Switch id="weekly-summary" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="space-y-0.5">
                      <Label htmlFor="tips-updates">Tips & Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive interview tips and platform updates</p>
                    </div>
                    <Switch id="tips-updates" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Push Notifications</h3>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-reminders">Interview Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications for upcoming interviews
                      </p>
                    </div>
                    <Switch id="push-reminders" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-y-0">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-feedback">Feedback Ready</Label>
                      <p className="text-sm text-muted-foreground">Get notified when interview feedback is ready</p>
                    </div>
                    <Switch id="push-feedback" defaultChecked />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Frequency</h3>

                  <RadioGroup defaultValue="immediate">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="immediate" id="immediate" />
                      <Label htmlFor="immediate">Immediate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily">Daily Digest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Weekly Digest</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
                <CardDescription>Manage your subscription plan and billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Pro Plan</h3>
                      <p className="text-sm text-muted-foreground">$19/month</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">Active</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm">
                      Your next billing date is <strong>June 15, 2023</strong>
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        Change Plan
                      </Button>
                      <Button variant="outline" size="sm">
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Payment Method</h3>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="h-6 w-6 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Visa ending in 4242</p>
                          <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing History</h3>

                  <div className="rounded-lg border divide-y">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">May 15, 2023</p>
                        <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium">$19.00</p>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">April 15, 2023</p>
                        <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium">$19.00</p>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">March 15, 2023</p>
                        <p className="text-xs text-muted-foreground">Pro Plan - Monthly</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium">$19.00</p>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

