import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Download, Trash2, Upload } from "lucide-react"

export default function SettingsPage() {
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
                <CardDescription>Update your profile information to personalize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us a bit about yourself" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Career Information</h3>

                  <div className="grid gap-2">
                    <Label htmlFor="current-role">Current Role</Label>
                    <Input id="current-role" placeholder="Frontend Developer" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="target-role">Target Role</Label>
                    <Input id="target-role" placeholder="Senior Frontend Developer" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="skills">Key Skills</Label>
                    <Textarea id="skills" placeholder="React, JavaScript, CSS, Next.js, etc." />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Resume/CV</h3>

                  <div className="grid gap-2">
                    <Label>Upload Resume</Label>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Resume
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Current
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Supported formats: PDF, DOCX, RTF (Max size: 5MB)
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
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

