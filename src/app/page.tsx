import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const baseUrl = "http://localhost:3000"; // or your hosted domain

/**
 * Fetches the response from the Gemini AI model API.
 *
 * @returns {Promise<Object | null>} - A promise that resolves with the response
 * data from the API, or null if there is an error.
 */
const fetchResponse = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/suggest-messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: "Explain how AI works"
      }), // Replace with your state which is controlled by an input
    });

    // Parse the response data
    if(!response){
      console.error("not getting the suggetions");
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching response:", error);
    return null;
  }
};

const page = async () => {
  const response = await fetchResponse();
  return (
    <div className="prose prose-base px-5 lg:px-10 py-10 lg:py-20 w-full max-w-full bg-amber-50 text-black">
      <Markdown remarkPlugins={[remarkGfm]}>{response.summary}</Markdown>
    </div>
  );
};

export default page;
