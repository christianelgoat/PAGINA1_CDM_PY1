import { GoogleGenAI } from "@google/genai";
import type { Content } from "@google/genai";

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return new Response("API key not configured", { status: 500 });
    }

    const { messages, systemInstruction } = await req.json();
    if (!messages || !systemInstruction) {
        return new Response("Invalid request body", { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Convert frontend message format to GenAI Content format
    const history: Content[] = messages.slice(0, -1).map((msg: {role: string, text: string}) => ({
        role: msg.role,
        parts: [{ text: msg.text }]
    }));
    
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user') {
        return new Response("Last message must be from the user", { status: 400 });
    }

    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction },
        history: history,
    });

    const geminiStream = await chat.sendMessageStream({ message: lastMessage.text });

    // Transform the AsyncGenerator to a ReadableStream
    const readableStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of geminiStream) {
          if (chunk.text) {
            const encodedChunk = encoder.encode(chunk.text);
            controller.enqueue(encodedChunk);
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error("Error in API route:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}
