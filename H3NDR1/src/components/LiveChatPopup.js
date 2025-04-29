import React, { useState } from 'react';

const LiveChatPopup = ({ toggleChat }) => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: 'user', text: input }]);
    setInput('');
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Sorry, I am still learning. Please check back later!' },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-gray-900 rounded-lg shadow-lg flex flex-col z-50">
      <div className="flex justify-between items-center bg-gray-800 p-3 rounded-t-lg">
        <h3 className="text-neonBlue font-semibold">Live Chat</h3>
        <button
          onClick={toggleChat}
          aria-label="Close Chat"
          className="text-gray-400 hover:text-neonGreen"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="flex-grow p-3 overflow-y-auto max-h-64 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.from === 'bot' ? 'bg-gray-700 text-neonBlue self-start' : 'bg-neonGreen text-black self-end'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-3 bg-gray-800 rounded-b-lg flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-grow rounded-md p-2 bg-gray-700 text-white focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-neonBlue hover:bg-neonGreen text-black rounded-md px-4 py-2 font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChatPopup;
