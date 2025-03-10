import { InterviewConfigForm } from "@/components/interview-config-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pattern-background">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-3 text-center mb-10 animate-fade-in">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-jobsphere-700 to-jobsphere-500 bg-clip-text text-transparent">
              JobSphere Interview Preparation
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Configure your personalized AI interview session to practice and perfect your interview skills
            </p>
          </div>
          
          <InterviewConfigForm />
        </div>
      </div>
    </main>
  );
}
