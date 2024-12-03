import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-colors"
        >
          <Bot className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-96">
          <div className="p-4 border-b bg-emerald-500 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-medium">Travel Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              ×
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4">
            <div className="flex gap-2 mb-4">
              <div className="bg-emerald-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">
                  Hello! I'm your AI travel assistant. How can I help you plan your Sri Lanka adventure?
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything about Sri Lanka..."
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}