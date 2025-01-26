"use client";

import { useState } from "react";

export default function MainPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setResponse(data.completion);
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Finance Assistance</h1>
          <p className="text-gray-600 text-lg">Your personal guide to financial literacy and smart money decisions</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-gray-700 text-sm font-semibold mb-2">
                Ask anything about personal finance, investing, or money management
              </label>
              <textarea
                id="prompt"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-32 p-4 border border-gray-200 rounded-lg text-gray-800 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Example: How should I start budgeting? What's the best way to save for retirement? How do I build an emergency fund?"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition duration-200 ease-in-out transform hover:-translate-y-1 font-semibold"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Get Financial Advice"}
            </button>
          </form>
        </div>

        {response && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Financial Advice:</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{response}</p>
            </div>
          </div>
        )}

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Always consult with a qualified financial advisor for personalized advice.</p>
        </footer>
      </div>
    </main>
  );
}