export interface InterviewTemplate {
  name: string
  job_role: string
  industry: string
  seniority_level: string
  years_of_experience: number
  target_company: string
  interview_types: string[]
  skills: string[]
  strengths: string[]
  weaknesses: string[]
  question_complexity: string
  question_categories: string[]
  session_duration: number
  num_questions: number
  time_pressure: boolean
  follow_up_questions: boolean
  interruption_simulation: boolean
  feedback_depth: string
  feedback_focus_areas: string[]
  real_time_feedback: boolean
  knowledge_gap_analysis: boolean
  resource_integration: boolean
  improvement_tracking: boolean
  enable_audio_video: boolean
  record_session: boolean
  enable_transcription: boolean
  interviewer_style: string
  interviewer_persona: string
  accent_language: string
  start_immediately: boolean
  is_public: boolean
}

export const INTERVIEW_TYPES = [
  "Behavioral",
  "Technical",
  "Competency-based",
  "Case Study",
  "Panel"
]

export const QUESTION_CATEGORIES = [
  "Technical",
  "Problem-solving",
  "Situational",
  "Leadership",
  "Cultural fit"
]

export const FEEDBACK_AREAS = [
  "Clarity",
  "Accuracy",
  "Body language",
  "Structure",
  "Confidence"
]

export const INTERVIEWER_PERSONAS = [
  "professional",
  "friendly",
  "technical expert",
  "industry veteran",
  "startup founder"
]

export const ACCENT_OPTIONS = [
  "standard",
  "british",
  "american",
  "australian",
  "indian"
]

export const COMPLEXITY_LEVELS = [
  "beginner",
  "basic",
  "expert"
]

export const SENIORITY_LEVELS = [
  "Junior",
  "Mid-level",
  "Senior",
  "Lead",
  "Principal"
]

export const FEEDBACK_DEPTH_OPTIONS = [
  { value: "basic", label: "Basic - Quick overview of performance" },
  { value: "standard", label: "Standard - Detailed feedback with suggestions" },
  { value: "comprehensive", label: "Comprehensive - In-depth analysis with examples" }
]

export const INTERVIEWER_STYLES = [
  { value: "friendly", label: "Friendly - Supportive and encouraging" },
  { value: "neutral", label: "Neutral - Professional and balanced" },
  { value: "challenging", label: "Challenging - Pushes with difficult questions" }
]