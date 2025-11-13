import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your AI assistant for the LNMIIT Welding Research website. I can help you navigate the site and answer questions about welding research. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  // Website navigation context
  const websiteContext = `
You are an AI assistant for the LNMIIT (LNM Institute of Information Technology) Welding Research Laboratory website. 

WEBSITE NAVIGATION INFORMATION:
- Home (/): Main landing page with hero section, expertise overview, gallery, and testimonials
- About (/about): Information about welding research at LNMIIT
- Facility (/facility): Overview of welding lab facilities including SMAW, SAW, GMAW/MIG, GTAW/TIG, Oxyfuel Welding, Robotic Welding, Plasma Cutting, Consumable Development, 3-Axis Welding Manipulator, and Advanced Submerged Arc Welding
- Research (/research): Featured research projects and patented innovations
- Faculty (/faculty): Regular faculty members and staff
- Blog (/blog): Blog posts about welding research
- Career (/career): Career opportunities in welding
- Contact (/contact): Contact form and information
- Scope (/scope): Why choose LNMIIT for welding research

FACILITY DETAILS:
- Facility 1 (/facility1): SMAW - Shielded Metal Arc Welding
- Facility 2 (/facility2): SAW - Submerged Arc Welding
- Facility 3 (/facility3): GMAW/MIG - Gas Metal Arc Welding
- Facility 4 (/facility4): GTAW/TIG - Gas Tungsten Arc Welding
- Facility 5 (/facility5): Oxyfuel Welding
- Facility 6 (/facility6): Robotic Welding
- Facility 7 (/facility7): Plasma Cutting
- Facility 8 (/facility8): Consumable Development
- Facility 9 (/facility9): 3-Axis Welding Manipulator
- Facility 10 (/facility10): Advanced Submerged Arc Welding

RESEARCH PAGES:
- Page 1 (/page1): Modelling of welding conditions on dilution of stainless steel claddings
- Page 2 (/page2): Experimental analysis of dissimilar metal weld joint
- Page 3 (/page3): Effect of process parameters on friction stir welding
- Page 4 (/page4): Experimental investigation of weld bead characteristics during SAW
- Page 5 (/page5): Taguchi combined AHP approach for optimizing SAW process

EXTENDED PAGES:
- Industry Consultancy (/industry-consultancy)
- Training (/training)
- Workshop (/workshop)

CONTACT INFORMATION:
- Email: info.lnmiit@lnmiit.ac.in
- Phone: 0141 268 8090
- Address: Rupa ki Nagal, Post-Sumel, Via - Jamdoli, Jaipur, Rajasthan 302031

When users ask about navigation, provide helpful guidance and suggest relevant pages. For welding research questions, provide accurate technical information based on your knowledge.
`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Check if it's a navigation question
      const navigationKeywords = ['go to', 'navigate', 'visit', 'show me', 'where is', 'how to find', 'link to', 'page'];
      const isNavigationQuery = navigationKeywords.some(keyword => 
        input.toLowerCase().includes(keyword)
      );

      let prompt = websiteContext + '\n\nUser Question: ' + input;
      
      if (isNavigationQuery) {
        prompt += '\n\nPlease provide navigation guidance and suggest the relevant page route (e.g., /about, /facility, etc.) if applicable.';
      }

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Extract route if mentioned in response
      const routeMatch = text.match(/\/[a-z-]+/i);
      if (routeMatch && isNavigationQuery) {
        const route = routeMatch[0];
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: text,
            route: route,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: text,
          },
        ]);
      }
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again or contact us directly at info.lnmiit@lnmiit.ac.in',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleRouteClick = (route) => {
    if (route) {
      navigate(route);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => {
              setIsOpen(true);
            }}
            className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-red-800 text-white border-none cursor-pointer flex items-center justify-center shadow-lg z-[1000] transition-all duration-300 hover:bg-red-900 hover:scale-110 hover:shadow-xl group md:bottom-8 md:right-8 sm:bottom-4 sm:right-4 sm:w-14 sm:h-14"
            aria-label="Open chatbot"
          >
            <FiMessageCircle className="w-7 h-7 md:w-7 md:h-7 sm:w-6 sm:h-6 relative z-10" />
            <span className="absolute w-16 h-16 md:w-16 md:h-16 sm:w-14 sm:h-14 rounded-full bg-red-800 opacity-0 group-hover:opacity-75 group-hover:animate-ping transition-opacity duration-300"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: '600px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 w-[400px] max-w-[calc(100vw-60px)] max-h-[calc(100vh-60px)] bg-white rounded-2xl shadow-2xl flex flex-col z-[1001] overflow-hidden border-2 border-red-800 md:w-[400px] md:bottom-8 md:right-8 sm:w-[calc(100vw-20px)] sm:bottom-4 sm:right-4 sm:rounded-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-800 to-red-900 text-white px-5 py-4 flex justify-between items-center border-b-2 border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  <FiMessageCircle />
                </div>
                <div>
                  <h3 className="text-base font-bold m-0 text-white">Welding Research Assistant</h3>
                  <p className="text-xs m-0 opacity-90 text-white">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-transparent border-none text-white cursor-pointer w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/20"
                aria-label="Close"
              >
                <FiX />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-gray-50 custom-scrollbar">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex max-w-[85%] animate-fadeIn ${
                      message.role === 'user' 
                        ? 'self-end flex-row-reverse' 
                        : 'self-start'
                    }`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed break-words ${
                        message.role === 'user'
                          ? 'bg-red-800 text-white rounded-br-sm'
                          : 'bg-white text-gray-900 border border-gray-200 rounded-bl-sm shadow-sm'
                      }`}
                    >
                      {message.content}
                      {message.route && (
                        <button
                          onClick={() => handleRouteClick(message.route)}
                          className="mt-2 px-3 py-1.5 bg-red-800 text-white border-none rounded-lg text-xs font-semibold cursor-pointer transition-all hover:bg-red-900 hover:-translate-y-0.5 hover:shadow-md block"
                        >
                          Go to {message.route}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex self-start max-w-[85%]">
                    <div className="px-4 py-3 rounded-2xl bg-white text-gray-900 border border-gray-200 rounded-bl-sm shadow-sm">
                      <div className="flex gap-1 py-2">
                        <span className="w-2 h-2 rounded-full bg-red-800 animate-bounce"></span>
                        <span className="w-2 h-2 rounded-full bg-red-800 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-2 h-2 rounded-full bg-red-800 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

            {/* Input */}
            <div className="flex gap-2 p-4 bg-white border-t border-gray-200">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about navigation or welding research..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-3xl text-sm outline-none transition-colors focus:border-red-800 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-11 h-11 rounded-full bg-red-800 text-white border-none cursor-pointer flex items-center justify-center transition-all flex-shrink-0 hover:bg-red-900 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <FiSend />
                </button>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

