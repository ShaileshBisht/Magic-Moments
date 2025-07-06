export interface Tutorial {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  link: string;
  category?: string;
}

export const tutorials: Tutorial[] = [
  {
    id: "getting-started",
    title: "Getting Started with MagicMoments",
    description: "Learn the basics of using our AI art generator and create your first masterpiece",
    level: "Beginner",
    duration: "15 min",
    link: "/tutorials/getting-started",
    category: "Basics",
  },
  {
    id: "prompt-engineering",
    title: "Advanced Prompt Engineering",
    description: "Master the art of writing effective prompts to get the best results",
    level: "Intermediate",
    duration: "30 min",
    link: "/tutorials/prompt-engineering",
    category: "Techniques",
  },
  {
    id: "custom-styles",
    title: "Creating Custom Art Styles",
    description: "Learn how to develop and save your own unique art styles",
    level: "Advanced",
    duration: "45 min",
    link: "/tutorials/custom-styles",
    category: "Advanced",
  },
  {
    id: "image-editing",
    title: "Image Editing and Refinement",
    description: "Discover how to enhance and refine your AI-generated artwork",
    level: "Intermediate",
    duration: "25 min",
    link: "/tutorials/image-editing",
    category: "Post-Processing",
  },
];

export const tutorialCategories = ["Basics", "Techniques", "Advanced", "Post-Processing"];

export const tutorialLevels = ["Beginner", "Intermediate", "Advanced"] as const;
