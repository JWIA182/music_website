import { GoogleGenAI, ChatSession, GenerationConfig } from "@google/genai";
import { PRODUCER_NAME, SERVICES, PROJECTS, GEAR_LIST } from "../constants";

// Initialize the client
// Note: In a real production app, you might want to handle this initialization 
// inside a context or effect to ensure the key is present.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const systemInstruction = `
You are the virtual studio assistant for ${PRODUCER_NAME}, a professional music producer and mixing engineer.
Your goal is to answer visitor questions about Alex's services, experience, gear, and pricing in a professional, creative, and helpful tone.
Keep answers concise (under 3 sentences when possible) as this is a chat interface.

Context about Alex:
- Role: Music Producer, Mixing Engineer, Mastering Engineer.
- Services: ${SERVICES.map(s => s.title).join(', ')}.
- Notable Gear: ${GEAR_LIST.map(c => c.items.join(', ')).join(', ')}.
- Recent Projects: ${PROJECTS.map(p => `${p.title} by ${p.artist}`).join(', ')}.
- Philosophy: "Sculpting Sound. Defining Emotion." - Focuses on emotional impact over technical perfection, though technical excellence is a given.

If asked about pricing that isn't specified, suggest they use the contact form for a custom quote.
If asked to listen to a demo, say "Alex would love to hear it! Please submit links via the contact form."
`;

let chatSession: ChatSession | null = null;

export const initializeChat = async (): Promise<ChatSession> => {
  if (chatSession) return chatSession;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please try the contact form instead!";
  }

  try {
    const session = await initializeChat();
    const result = await session.sendMessage({ message });
    return result.text || "I received your message but couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the studio server right now.";
  }
};
