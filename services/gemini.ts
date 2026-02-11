
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getStudyAdvice = async (userPrompt: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are 'Rakesh Bot', a world-class Computer Science expert for the 'Learn with Rakesh' platform. You specialize in teaching students (Classes 5-10) about hardware, software, networking, web development, and Python programming. Keep explanations technical yet accessible, using programming analogies where possible.",
        temperature: 0.7,
        topP: 0.8,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Let's try another coding question!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The CS Study Buddy is currently updating its kernel. Please try again in a moment.";
  }
};
