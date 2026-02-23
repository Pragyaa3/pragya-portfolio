export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  reply: string;
  success: boolean;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  emoji: string;
  github?: string;
  live?: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
  color: string;
}