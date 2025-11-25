import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

// We allow the user to input their key for the demo, or use env if available.
let genAIClient: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

export const initializeGemini = (apiKey: string) => {
  try {
    genAIClient = new GoogleGenAI({ apiKey });
    
    chatSession = genAIClient.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    throw new Error("AI Session not initialized. Please provide an API Key.");
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({
      message: message
    });
    
    // Check if text exists, otherwise handle gracefully
    if (response.text) {
        return response.text;
    }
    
    return "I'm sorry, I couldn't generate a text response at this time.";

  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};

export const checkEnvKey = (): boolean => {
    if (process.env.API_KEY) {
        initializeGemini(process.env.API_KEY);
        return true;
    }
    return false;
};