import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Vishesh's AI assistant. Ask me anything about his experience, skills, or background! 🤖",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base about Vishesh
  const knowledgeBase = {
    experience: {
      keywords: ['experience', 'work', 'job', 'career', 'years', 'professional'],
      response: "Vishesh has 6+ years of professional experience as a Full Stack Java Developer. He currently works as a Senior Software Engineer at Lowe's, previously worked at Principal Global Services and TCS. His career spans across various domains including retail, financial services, and consulting."
    },
    skills: {
      keywords: ['skills', 'technology', 'tech', 'programming', 'languages', 'frameworks'],
      response: "Vishesh is skilled in Java, Spring Boot, React, AWS, Microservices, Docker, Jenkins, and more. He has expertise in both frontend and backend development, with strong knowledge of cloud technologies and DevOps practices."
    },
    education: {
      keywords: ['education', 'degree', 'college', 'university', 'study', 'academic'],
      response: "Vishesh holds an MCA (Master of Computer Applications) from Kamla Nehru Institute of Technology (KNIT) and a B.Sc in Mathematics/Chemistry from CSJM University, Kanpur."
    },
    current: {
      keywords: ['current', 'now', 'present', 'lowes', "lowe's", 'job'],
      response: "Currently, Vishesh works as a Senior Software Engineer at Lowe's, where he develops promotion management systems and works on optimizing search capabilities for millions of records using Java, Spring Boot, and AWS technologies."
    },
    projects: {
      keywords: ['projects', 'work', 'built', 'developed', 'created', 'applications'],
      response: "Vishesh has worked on several major projects including Promo Central Application at Lowe's, Transaction Tracking Systems, Spring Batch Processing applications, and Mainframe Jobs Management systems. His projects focus on scalable, enterprise-level solutions."
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'hire', 'linkedin', 'github'],
      response: "You can reach Vishesh at vishesh.tiwari813@gmail.com, connect on LinkedIn (https://www.linkedin.com/in/vishesh-tiwari-448222146/), or check his GitHub (https://github.com/Vishesh813). He's open to new opportunities!"
    },
    location: {
      keywords: ['location', 'where', 'based', 'live', 'from'],
      response: "Vishesh is based in India and has experience working with global teams across different time zones."
    },
    achievements: {
      keywords: ['achievements', 'awards', 'recognition', 'accomplishments'],
      response: "Vishesh has received multiple recognitions including Star Performer awards, client appreciation certificates, and has been recognized for his technical contributions and leadership in various projects."
    }
  };

  const getResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Check for greetings
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return "Hello! Great to meet you! I can tell you all about Vishesh's professional background. What would you like to know? 😊";
    }

    // Check for thanks
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Feel free to ask me anything else about Vishesh's experience or skills! 🙂";
    }

    // Check knowledge base
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => message.includes(keyword))) {
        return data.response;
      }
    }

    // Default response with suggestions
    return "I'd be happy to help! You can ask me about:\n\n• Vishesh's work experience and current role\n• Technical skills and expertise\n• Education background\n• Projects he's worked on\n• How to contact him\n• His achievements and awards\n\nWhat interests you most? 🤔";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What's Vishesh's experience?",
    "What technologies does he know?",
    "Tell me about his education",
    "How can I contact him?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="bot-info">
              <div className="bot-avatar">🤖</div>
              <div>
                <h4>Vishesh's AI Assistant</h4>
                <span className="status">Online</span>
              </div>
            </div>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender}`}
              >
                <div className="message-content">
                  {message.text.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="message-content typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="quick-questions">
              <p>Quick questions:</p>
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="quick-question-btn"
                  onClick={() => {
                    setInputValue(question);
                    setTimeout(handleSend, 100);
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Vishesh..."
              disabled={isTyping}
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
