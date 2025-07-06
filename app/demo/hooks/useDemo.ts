import { useState } from "react";

export const useDemo = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;

    setIsGenerating(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setGeneratedImage("/11.png");
    setIsGenerating(false);
  };

  const resetDemo = () => {
    setPrompt("");
    setGeneratedImage(null);
    setIsGenerating(false);
  };

  return {
    prompt,
    setPrompt,
    isGenerating,
    generatedImage,
    handleGenerate,
    resetDemo,
  };
};
