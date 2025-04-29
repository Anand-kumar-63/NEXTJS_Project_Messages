import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI("AIzaSyAnrSwADxeGtBkaxSjL8n61q_T5RiSCnmk");

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-001",
  tools: [{ codeExecution: {} }],
});

/**
 * API route for streaming content using Gemini AI model.
 */
export async function POST(req: Request): Promise<Response> {
  const { text } = await req.json();
  const prompt = text || "Explain how AI works";

  try {
    const resultStream = await model.generateContent(prompt);

    // const encoder = new TextEncoder();
    // const stream = new ReadableStream({
    //   async start(controller) {
    //     for await (const chunk of resultStream.stream) {
    //       const content = chunk.text();
    //       controller.enqueue(encoder.encode(content));
    //     }
    //     controller.close();
    //   },
    // });
    return new Response(
      JSON.stringify({
        summary: resultStream.response.text(),
      }),
    );
  } catch (error) {
    return new Response("Error in suggestion api" + error);
  }
}
