import React from 'react';

export default function ChatMessage({ text, sender, error }) {
  const isBot = sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isBot
            ? 'bg-gray-100 text-gray-800'
            : 'bg-blue-500 text-white'
        } ${error ? 'bg-red-100 text-red-600' : ''}`}
      >
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}