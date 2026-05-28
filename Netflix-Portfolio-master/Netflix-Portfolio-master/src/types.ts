// types.ts

export interface ProfileBanner {
  backgroundImage: string;         // Now a direct URL string
  headline: string;
  resumeLink: string;              // Direct URL string
  linkedinLink: string;
  profileSummary: string;
}

export interface TimelineItem {
  timelineType: 'work' | 'education';
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];         // You can keep this as an array
  dateRange: string;
}

// UPGRADED: Expanded to support dynamic subtitles, arrays, and live analytics tracking metric tokens!
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  techUsed: string[];              // Changed from string to string[] to process pill rows perfectly!
  image: string;                   // Direct image URL or import path
  metrics: string[];               // Added to support dopamine analytics benchmarks
  slug: string;                    // Added for unique routing indexing
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: string;          // Now a string (image path or import)
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
  color?: string;                  // Optional property for your brilliant neon hover actions!
}

export type ProfileType = 'Recruiter' | 'Brand & Content Strategist' | 'stalker' | 'Adventurer';