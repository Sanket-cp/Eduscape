
export interface Course {
  id: string;
  title: string;
  description: string;
  price: number; // Price in USD, will be converted to INR in components
  instructor: string;
  thumbnail: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  rating: number;
  enrolled: number;
  features: string[];
  curriculum: CourseSection[];
  isFree?: boolean;
  certificateTemplate?: string;
  demoVideo?: string;
  location?: string; // Add location field (default: India)
}

export interface CourseSection {
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
  videoUrl?: string;
}

export interface UserProgress {
  courseId: string;
  completedLessons: string[];
  progress: number;
  lastAccessed: string;
  location: string; // Default to India
}
