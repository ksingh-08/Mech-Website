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
      content: "Hello! Welcome to the LNMIIT Welding Research Laboratory website. I'm here to help you navigate our site and answer any questions you have about welding research, our facilities, or our ongoing projects. How can I assist you today?\n\nHere are some quick links to get you started:\n* **About Us:** `/about`\n* **Our Facilities:** `/facility`\n* **Research Highlights:** `/research`\n* **Contact Information:** `/contact`",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
  const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

  // Website navigation context
  const websiteContext = `
You are an AI assistant for the LNMIIT (LNM Institute of Information Technology) Welding Research Laboratory website. You have complete knowledge of all content on this website.

FACULTY MEMBERS (Regular Faculty):
1. Dr. Mohit Makkar - Head of Department, Assistant Professor, Mechanical-Mechatronics Engineering, Speciality in Robotics And Automation
2. Prof. Sunil Pandey - Distinguished Professor, Mechanical-Mechatronics Engineering, Speciality in Manufacturing Technology. Ph.D. (Welding), M. Tech. (Prod. Engg.), B.E. (Mech.). Professor of Mechanical Engineering at Jawaharlal Nehru University. Email: sunil.pandey@lnmiit.ac.in. Areas of Expertise: Welding and Joining Technology, Manufacturing Technology, Industrial Safety, Process Planning, Unconventional Machining. ResearchGate: https://www.researchgate.net/profile/Sunil-Pandey-15
3. Dr. Manoj Kumar - Associate Professor, Mechanical-Mechatronics Engineering, Speciality in Manufacturing Technology. Ph.D. (Mechanical Engineering), M.Tech. (Production Technology), B.Tech. (Industrial and Production Technology). Email: manojkumar@lnmiit.ac.in. Areas of Expertise: Manufacturing Technology, Processes and Consumables for Welding, Cutting and Gouging, Welding Metallurgy, Metal 3D Printing, Welding Fluxes, Wear Resistant Alloy Fluxes. ResearchGate: https://www.researchgate.net/profile/Manoj-Kumar-343
4. Dr. Vikram Sharma - Associate Professor, Mechanical-Mechatronics Engineering, Speciality in Industrial Management
5. Dr. Ashok Kumar Dargar - Associate Professor, Mechanical-Mechatronics Engineering
6. Dr. Kamal Kishore Khatri - Associate Professor, Mechanical-Mechatronics Engineering, Speciality in Alternate fuels and IC Engines
7. Dr. Deepak Rajendra Unune - Assistant Professor, Mechanical-Mechatronics Engineering, Speciality in Material Science and Engineering. Postdoctoral Research (University of Sheffield, UK), Ph.D. (MNIT Jaipur), M. Tech. (Govt. College of Engineering, Karad). Email: deepak.unune@lnmiit.ac.in. Areas of Expertise: Electrical Discharge Machining, CNC Machining, Hybrid Machining, Sustainable Machining. ResearchGate: https://www.researchgate.net/profile/Deepak-Unune
8. Dr. Servesh Kumar Agnihotri - Assistant Professor, Mechanical-Mechatronics Engineering, Speciality in Solid Mechanics and Design
9. Dr. Vikas Sharma - Assistant Professor, Mechanical-Mechatronics Engineering
10. Dr. Sandeep Singh Shekhawat - Assistant Professor, Mechanical-Mechatronics Engineering
11. Dr. Atul Mishra - Assistant Professor, Mechanical-Mechatronics Engineering
12. Dr. Praveen Kumar Sharma - Assistant Professor, Mechanical-Mechatronics Engineering
13. Dr. Bharat Singh - Assistant Professor, Mechanical-Mechatronics Engineering

STAFF MEMBERS:
1. Bhagwan Singh - Technical Superintendent
2. Sandeep Kumar Saxena - Technical Superintendent
3. Satyanarayan Prajapat - Technical Superintendent
4. Udayveer Singh - Jr. Technical Superintendent
5. Satish Yadav - Jr. Technical Superintendent
6. Gajendra Kumawat - Jr. Technician

WEBSITE NAVIGATION INFORMATION:
- Home (/): Main landing page with hero section, expertise overview, gallery, and testimonials
- About (/about): Information about welding research at LNMIIT, the department's mission and vision
- Facility (/facility): Overview of welding lab facilities
- Research (/research): Featured research projects and patented innovations
- Faculty (/faculty): Complete list of regular faculty members and staff with their specializations
- Blog (/blog): Blog posts about welding research
- Career (/career): Career opportunities in welding
- Contact (/contact): Contact form and information
- Scope (/scope): Why choose LNMIIT for welding research
- Why PhD (/why-phd): Information about pursuing PhD at LNMIIT, research infrastructure, mentorship, and focus areas
- Welding Defects (/welding-defects): Comprehensive guide on welding defects, their causes, identification, and prevention
- Technical Knowledge (/technical-knowledge): Welding fundamentals, joint configurations, processes, and terminology

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

RESEARCH PROJECTS:
1. Page 1 (/page1): Modelling of the effects of welding conditions on dilution of stainless steel claddings produced by gas metal arc welding procedures
2. Page 2 (/page2): Experimental analysis of dissimilar metal weld joint: Ferritic to austenitic stainless steel
3. Page 3 (/page3): Effect of process parameters on friction stir welding of aluminum alloy 2219-T87
4. Page 4 (/page4): Experimental investigation and optimization of weld bead characteristics during submerged arc welding of AISI 1023 steel
5. Page 5 (/page5): A robust Taguchi combined AHP approach for optimizing AISI 1023 low carbon steel weldments in the SAW process

PATENTED INNOVATIONS:
Plasma Enhanced Processes:
- Plasma Enhanced Shielded Metal Arc Welding (PESMAW)
- Plasma Enhanced Oxygen Arc Cutting (PEOAC)
- Plasma Enhanced Oxygen Arc Piercing (PEOAP)
- Plasma Enhanced Oxygen Arc Lancing (PEOAL)
- Plasma Enhanced Oxygen Arc Gouging (PEOAG)
- Plasma Enhanced Shielded Metal Arc Surfacing (PESMAS)
- Plasma Enhanced Oxygen Arc Scarfing (PEOAS)

Advanced Welding Techniques:
- Universal Shielded Metal Arc Welding (USMAW)
- Advanced Submerged Arc Welding (ASAW)
- Advanced Gas Metal Arc Welding (AGMAW)
- Moving Contact Shielded Metal Arc Welding (MCSMAW)

Design Innovations:
- Design of Underwater welding electrodes
- Welding of cross-country pipe lines with E-6013 and E-7018 electrodes
- Design of welding fluxes
- Design of 'Spin Welding Machine' for welding of polymers

EXTENDED PAGES:
- Industry Consultancy (/industry-consultancy): Industrial consultancy services, faculty consultants (Sunil Pandey, Manoj Kumar)
- Training (/training): In-house training programs for individuals and organizations
- Workshop (/workshop): Workshop facility for hands-on training, welding research, and project development

ADVANCED RESEARCH INFRASTRUCTURE:
- 3-Axis Welding Manipulator for automated precision welding and 3D metal printing
- Advanced GMAW and SAW torch systems (patented) for process optimization
- Robotic Welding Stations and Plasma Cutting Units
- Consumable Development Unit for alloy and flux innovation

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

  // Function to render formatted message content with bold text, links, and tables
  const renderFormattedMessage = (content) => {
    // Check if content contains table format (markdown-style tables)
    if (content.includes('|') && content.includes('---')) {
      return renderTableFormat(content);
    }
    
    // Split content by lines
    const lines = content.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Skip empty lines
      if (!line.trim()) {
        return <div key={lineIndex} className="h-2"></div>;
      }
      
      // Check if line contains a route pattern like `/about`
      const routeMatch = line.match(/(`\/[a-z-]+`)/gi);
      
      if (routeMatch) {
        // Split line by route patterns
        const parts = line.split(/(`\/[a-z-]+`)/gi);
        
        return (
          <div key={lineIndex} className={lineIndex > 0 ? 'mt-2' : ''}>
            {parts.map((part, partIndex) => {
              // Check if part is a route
              const routePattern = part.match(/`(\/[a-z-]+)`/i);
              if (routePattern) {
                const route = routePattern[1];
                return (
                  <button
                    key={partIndex}
                    onClick={() => handleRouteClick(route)}
                    className="text-red-800 font-semibold underline hover:text-red-900 transition-colors mx-1"
                  >
                    {route}
                  </button>
                );
              }
              
              // Check for bold text **text**
              const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
              return (
                <span key={partIndex}>
                  {boldParts.map((boldPart, boldIndex) => {
                    if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                      return (
                        <strong key={boldIndex} className="font-bold">
                          {boldPart.slice(2, -2)}
                        </strong>
                      );
                    }
                    return <span key={boldIndex}>{boldPart}</span>;
                  })}
                </span>
              );
            })}
          </div>
        );
      }
      
      // Handle bold text for lines without routes
      const boldParts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <div key={lineIndex} className={lineIndex > 0 ? 'mt-2' : ''}>
          {boldParts.map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={partIndex} className="font-bold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <span key={partIndex}>{part}</span>;
          })}
        </div>
      );
    });
  };

  // Function to render table format
  const renderTableFormat = (content) => {
    const lines = content.split('\n');
    const tableStartIndex = lines.findIndex(line => line.includes('|') && line.includes('---'));
    
    if (tableStartIndex === -1) {
      return renderFormattedMessage(content);
    }
    
    // Get table header
    const headerLine = lines[tableStartIndex - 1];
    const headers = headerLine.split('|').map(h => h.trim()).filter(h => h);
    
    // Get table rows
    const tableRows = [];
    for (let i = tableStartIndex + 1; i < lines.length; i++) {
      if (lines[i].includes('|') && !lines[i].includes('---')) {
        const cells = lines[i].split('|').map(c => c.trim()).filter(c => c);
        if (cells.length > 0) {
          tableRows.push(cells);
        }
      } else if (!lines[i].trim()) {
        break;
      }
    }
    
    // Render content before table
    const beforeTable = lines.slice(0, tableStartIndex - 1).join('\n');
    
    return (
      <div>
        {beforeTable && (
          <div className="mb-4">
            {renderFormattedMessage(beforeTable)}
          </div>
        )}
        
        {/* Table */}
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-red-800 text-white">
              <tr>
                {headers.map((header, idx) => (
                  <th key={idx} className="px-4 py-2 text-left font-semibold text-sm border-r border-red-900 last:border-r-0">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {tableRows.map((row, rowIdx) => (
                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="px-4 py-2 text-sm text-gray-700 border-r border-gray-200 last:border-r-0">
                      {renderCellContent(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Content after table */}
        {lines.slice(tableStartIndex + tableRows.length + 2).join('\n') && (
          <div className="mt-4">
            {renderFormattedMessage(lines.slice(tableStartIndex + tableRows.length + 2).join('\n'))}
          </div>
        )}
      </div>
    );
  };

  // Function to render cell content with formatting
  const renderCellContent = (cell) => {
    // Check for routes
    const routeMatch = cell.match(/`(\/[a-z-]+)`/i);
    if (routeMatch) {
      const route = routeMatch[1];
      return (
        <button
          onClick={() => handleRouteClick(route)}
          className="text-red-800 font-semibold underline hover:text-red-900 transition-colors"
        >
          {route}
        </button>
      );
    }
    
    // Check for bold text
    const boldParts = cell.split(/(\*\*[^*]+\*\*)/g);
    return (
      <>
        {boldParts.map((part, idx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={idx} className="font-bold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <span key={idx}>{part}</span>;
        })}
      </>
    );
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
            className="fixed bottom-8 right-8 w-[500px] max-w-[calc(100vw-60px)] max-h-[calc(100vh-60px)] bg-white rounded-2xl shadow-2xl flex flex-col z-[1001] overflow-hidden border-2 border-red-800 md:w-[500px] md:bottom-8 md:right-8 sm:w-[calc(100vw-20px)] sm:bottom-4 sm:right-4 sm:rounded-xl"
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
                      {message.role === 'assistant' ? renderFormattedMessage(message.content) : message.content}
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

