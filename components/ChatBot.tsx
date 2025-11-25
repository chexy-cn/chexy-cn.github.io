import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Key, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini, initializeGemini, checkEnvKey } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [tempApiKey, setTempApiKey] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize checks
  useEffect(() => {
    const isEnvSet = checkEnvKey();
    if (isEnvSet) {
      setHasApiKey(true);
      setMessages([
        {
          id: 'welcome',
          role: 'model',
          text: "Hi! I'm an AI assistant trained on this portfolio. Ask me anything about my experience, skills, or projects!",
          timestamp: new Date()
        }
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempApiKey.trim().length > 10) {
      const success = initializeGemini(tempApiKey);
      if (success) {
        setHasApiKey(true);
        setMessages([
          {
            id: 'welcome',
            role: 'model',
            text: "Key verified! I'm ready to answer questions about this portfolio.",
            timestamp: new Date()
          }
        ]);
      }
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Sorry, I encountered an error connecting to the AI service. Please check your connection or API key.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-slide-up">
          
          {/* Header */}
          <div className="bg-primary-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <h3 className="font-semibold">AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-700 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
            {!hasApiKey ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 p-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full text-yellow-600 dark:text-yellow-400">
                  <Key size={32} />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200">API Key Required</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  To chat with the AI portfolio assistant, please enter your Google Gemini API key. It is used only in your browser session.
                </p>
                <form onSubmit={handleApiKeySubmit} className="w-full space-y-2">
                  <input
                    type="password"
                    placeholder="Paste Gemini API Key"
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg transition-colors font-medium text-sm"
                  >
                    Start Chatting
                  </button>
                  <a 
                    href="https://aistudio.google.com/app/apikey" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block text-xs text-primary-600 hover:underline mt-2"
                  >
                    Get a free key here
                  </a>
                </form>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-primary-600 text-white rounded-br-none' 
                          : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-bl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none border border-gray-200 dark:border-gray-600 shadow-sm flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-primary-600" />
                      <span className="text-xs text-gray-500">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          {hasApiKey && (
            <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my projects..."
                  className="flex-1 p-2 bg-gray-100 dark:bg-gray-900 border-0 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with AI
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatBot;