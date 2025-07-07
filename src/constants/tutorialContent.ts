export interface TutorialContent {
  id: string;
  sections: {
    title: string;
    content: string[] | { type: "list"; items: string[] };
  }[];
}

export const tutorialContent: TutorialContent[] = [
  {
    id: "getting-started",
    sections: [
      {
        title: "What You'll Learn",
        content: {
          type: "list",
          items: [
            "How to navigate the MagicMoments interface",
            "Creating your first AI artwork",
            "Understanding basic prompt structure",
            "Saving and managing your creations",
          ],
        },
      },
      {
        title: "Getting Started",
        content: [
          "Welcome to MagicMoments! This tutorial will guide you through creating your first AI-generated artwork. We'll cover the basics of using our platform and help you understand how to get the best results from your prompts.",
        ],
      },
      {
        title: "Step 1: Setting Up Your Workspace",
        content: [
          "Begin by familiarizing yourself with the main interface. The prompt input field is your primary tool for communication with the AI. Take time to explore the various settings and options available.",
        ],
      },
      {
        title: "Step 2: Writing Your First Prompt",
        content: [
          'Start with simple, descriptive prompts. For example: "A serene mountain landscape at sunset with a peaceful lake reflection." Be specific about what you want to see in your artwork.',
        ],
      },
    ],
  },
  {
    id: "prompt-engineering",
    sections: [
      {
        title: "What You'll Learn",
        content: {
          type: "list",
          items: [
            "Advanced prompt writing techniques",
            "Using keywords and modifiers effectively",
            "Controlling style and composition",
            "Iterating and refining prompts",
          ],
        },
      },
      {
        title: "The Art of Prompt Engineering",
        content: [
          "Prompt engineering is the skill of crafting precise instructions that communicate your artistic vision to the AI. This tutorial covers advanced techniques to help you achieve professional-quality results.",
        ],
      },
      {
        title: "Structure and Keywords",
        content: [
          "Learn how to structure your prompts for maximum impact. We'll explore the use of artistic keywords, style references, and technical parameters that can dramatically improve your results.",
        ],
      },
      {
        title: "Advanced Techniques",
        content: [
          "Discover how to use negative prompts, weight adjustments, and composition controls to fine-tune your artistic output and achieve your desired aesthetic.",
        ],
      },
    ],
  },
  {
    id: "custom-styles",
    sections: [
      {
        title: "What You'll Learn",
        content: {
          type: "list",
          items: [
            "Creating and saving custom style presets",
            "Understanding style parameters",
            "Building a personal style library",
            "Sharing styles with the community",
          ],
        },
      },
      {
        title: "Developing Your Unique Style",
        content: [
          "This advanced tutorial teaches you how to create and maintain custom art styles that reflect your personal aesthetic. Learn to build a consistent visual language across your AI-generated artwork.",
        ],
      },
      {
        title: "Style Parameters",
        content: [
          "Understand the technical aspects of style creation, including color palettes, brushwork simulation, texture control, and compositional preferences that define your unique artistic voice.",
        ],
      },
      {
        title: "Style Management",
        content: [
          "Learn how to organize, save, and iterate on your custom styles. We'll cover best practices for maintaining consistency while allowing for creative evolution.",
        ],
      },
    ],
  },
  {
    id: "image-editing",
    sections: [
      {
        title: "What You'll Learn",
        content: {
          type: "list",
          items: [
            "Post-processing techniques for AI art",
            "Color correction and enhancement",
            "Detail refinement and cleanup",
            "Preparing artwork for different uses",
          ],
        },
      },
      {
        title: "Enhancing Your AI Artwork",
        content: [
          "Once you've generated your base artwork, this tutorial will teach you how to refine and enhance it to professional standards. Learn the essential post-processing techniques that can elevate your AI art.",
        ],
      },
      {
        title: "Technical Refinements",
        content: [
          "Discover how to address common issues in AI-generated images, including noise reduction, sharpening, and color balance. Learn when and how to apply these adjustments for the best results.",
        ],
      },
      {
        title: "Creative Enhancements",
        content: [
          "Explore creative post-processing techniques that can add your personal touch to AI-generated artwork, including selective editing, artistic filters, and compositional adjustments.",
        ],
      },
    ],
  },
];
