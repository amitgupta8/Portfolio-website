import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  BotMessageSquare,
  Minus,
  User,
  LoaderCircle
} from "lucide-react";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  
  const [messages, setMessages] = useState(() => {
    try {
      const savedMessages = localStorage.getItem("amit_portfolio_chat");
      if (savedMessages) {
        return JSON.parse(savedMessages);
      }
    } catch (error) {
      console.error("Failed to load chat history", error);
    }
    return [
      {
        id: 1,
        type: "bot",
        text: "👋 Hello! I'm Amit's AI assistant. You can ask me about Amit's skills and projects, or ask me anything else like weather, news, or coding questions!",
        time: "Now",
      },
    ];
  });

  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem("amit_portfolio_chat", JSON.stringify(messages));
    } catch (error) {
      console.error("Failed to save chat history", error);
    }
  }, [messages]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isBotTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // =========================
  //  GEMINI API CALL LOGIC
  // =========================
  const fetchGeminiReply = async (userInput) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return {
        text: "⚠️ API Key missing! Please configure VITE_GEMINI_API_KEY in your .env file.",
        options: ["My Skills", "Projects", "Contact Me"]
      };
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a helpful portfolio assistant for a Full-Stack Developer named Amit. You can answer questions about Amit's skills, projects, and resume, but you can also answer general questions about anything (weather, news, coding, India data, etc.). Keep answers concise and friendly.\n\nUser Question: ${userInput}`
                  }
                ]
              }
            ]
          }),
        }
      );

      const data = await response.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that right now.";

      return {
        text: aiReply,
        options: ["My Skills", "Projects", "Download Resume", "Contact Me"]
      };
    } catch (error) {
      console.error("Gemini API Error:", error);
      return {
        text: "Oops! Something went wrong while connecting to the AI. Please try again later.",
        options: ["Projects", "Contact Me"]
      };
    }
  };

  // Handle Send Message
  const handleSend = async (textToProcess = text) => {
    const finalMessage = textToProcess.trim();
    if (!finalMessage) return;

    const newUserMsg = {
      id: Date.now(),
      type: "user",
      text: finalMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setText("");
    setIsBotTyping(true);

    const replyData = await fetchGeminiReply(finalMessage);

    setIsBotTyping(false);
    setMessages((prev) => [...prev, {
      id: Date.now() + 1,
      type: "bot",
      text: replyData.text,
      options: replyData.options,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleOptionClick = (optionText) => {
    if (optionText === "Contact Me" || optionText === "Go to Contact Section") {
      const section = document.querySelector('#contact');
      section?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (optionText === "Projects" || optionText === "View Projects") {
      const section = document.querySelector('#projects');
      section?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (optionText === "Download Resume") {
      window.open('/resume.pdf', '_blank');
    }
    handleSend(optionText);
  };

  const MessageBubble = ({ message }) => {
    const isUser = message.type === "user";
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex gap-3 mb-5 ${isUser ? "justify-end" : "justify-start"}`}
      >
        {!isUser && (
          <div className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0 mt-1 shadow-lg">
            <BotMessageSquare size={20} className="text-emerald-400" />
          </div>
        )}
        <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
          <div className={`px-5 py-3.5 rounded-[20px] max-w-[280px] shadow-xl ${
            isUser 
            ? "rounded-br-none bg-gradient-to-r from-emerald-600 to-teal-600 text-white" 
            : "rounded-bl-none bg-gray-800 text-gray-200 border border-gray-700"
          }`}>
            <p className="text-[13px] leading-relaxed whitespace-pre-line select-text">{message.text}</p>
          </div>
          
          {!isUser && message.options && (
            <div className="flex flex-wrap gap-2 mt-3 max-w-[280px]">
              {message.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOptionClick(option)}
                  className="bg-gray-700 hover:bg-gray-600 text-emerald-300 text-[10px] font-medium px-3.5 py-1.5 rounded-full border border-gray-600 transition-colors shadow-sm cursor-pointer"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          )}
          
          <span className="text-[10px] text-gray-500 mt-2 px-2">
            {isUser ? "You" : "Amit's AI"} • {message.time}
          </span>
        </div>
        {isUser && (
           <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center shrink-0 mt-1 border border-gray-600 shadow">
             <User size={18} className="text-gray-300" />
           </div>
        )}
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[999]"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-emerald-400"
              />
              <MessageCircle size={28} className="relative z-10" />
              <span className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-gray-900 px-4 py-2 text-xs font-semibold text-gray-100 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-700">
                Chat with Amit's AI 👋
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="fixed z-[1000] bottom-3 right-3 left-3 md:left-auto md:w-[360px] h-[600px] max-h-[85vh] overflow-hidden rounded-3xl border border-gray-700 bg-[#0c111d] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-gray-700 bg-[#111827] px-5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-emerald-400">
                    <BotMessageSquare size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#111827] animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-50 text-sm tracking-tight">Amit's Gemini AI</h3>
                  <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                     <span className="block h-2 w-2 rounded-full bg-emerald-500"></span>
                    Online
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                  aria-label="Minimize chat"
                >
                  <Minus size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div
              ref={messagesRef}
              className="flex-1 overflow-y-auto p-6 bg-[#0c111d] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            >
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              
              {isBotTyping && (
                <div className="flex gap-3 justify-start mb-5">
                  <div className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0 mt-1">
                    <BotMessageSquare size={20} className="text-emerald-400" />
                  </div>
                  <div className="px-5 py-3.5 rounded-[20px] rounded-bl-none bg-gray-800 border border-gray-700 shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <LoaderCircle size={16} className="animate-spin text-emerald-400" />
                      <span className="text-xs text-gray-400 italic">Gemini is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gray-700 bg-[#111827] p-4 mt-auto">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything or about Amit..."
                  className="w-full rounded-full border border-gray-700 bg-[#1f2937] py-3 pl-5 pr-14 text-sm text-white placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
                />
                <motion.button
                  onClick={() => handleSend()}
                  disabled={isBotTyping || !text.trim()}
                  className="absolute right-1.5 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <p className="text-center text-[10px] text-gray-500 mt-2.5">
                Powered by Google Gemini API
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}