import React, { useState, useRef, useEffect } from 'react';
import './Main.css';
import user from "../../Images/images.jpg";
import { IoBulbOutline } from "react-icons/io5";
import { GiCompass } from "react-icons/gi";
import { FaRegMessage, FaCode } from "react-icons/fa6";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { BiImageAdd } from "react-icons/bi";
import { IoSend } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { GEMINI_API_KEY, GEMINI_API_URL } from '../config/gemini.js';
import ReactMarkdown from 'react-markdown';

function Main({ messages: propMessages = [], onMessagesUpdate }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(propMessages);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Update local messages when propMessages changes
  useEffect(() => {
    setMessages(propMessages);
  }, [propMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Check if API key is available
    if (!GEMINI_API_KEY) {
      alert('❌ API key not found!\n\nTo fix this:\n1. Copy .env.example to .env\n2. Add your Gemini API key\n3. Restart the server\n\nGet your API key from: https://makersuite.google.com/app/apikey');
      return;
    }

    const userMessage = {
      text: input.replace(/\n/g, "<br/>"),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;

      const updatedMessages = [...newMessages, {
        text: aiText,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }];
      
      setMessages(updatedMessages);
      if (onMessagesUpdate) onMessagesUpdate(updatedMessages);
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = "Sorry, I encountered an error.";
      
      if (error.message.includes('API Error: 400')) {
        errorMessage = "Invalid API request. Please check your API key in the .env file.";
      } else if (error.message.includes('API Error: 403')) {
        errorMessage = "API key is invalid or doesn't have permission. Please check your .env file.";
      } else if (error.message.includes('API Error: 429')) {
        errorMessage = "Too many requests. Please try again later.";
      }
      
      const errorMessages = [...newMessages, {
        text: errorMessage,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }];
      setMessages(errorMessages);
      if (onMessagesUpdate) onMessagesUpdate(errorMessages);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickPrompt = async (prompt) => {
    setInput(prompt);
    const event = { preventDefault: () => {} };
    await handleSubmit(event);
  };

  // Show setup message if API key is missing
  if (!GEMINI_API_KEY) {
    return (
      <div className='main'>
        <div className='nav'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/chatgem-icon.svg" alt="ChatGem" style={{ width: '32px', height: '32px' }} />
            <p>ChatGem</p>
          </div>
          <img src={user} alt="User Avatar" />
        </div>
        <div className='main-container'>
          <div className='greet'>
            <p><span>Setup Required</span></p>
            <p>Please configure your API key to get started</p>
          </div>
          <div style={{ 
            padding: '25px', 
            background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)', 
            borderRadius: '16px', 
            margin: '20px',
            lineHeight: '1.6',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1)'
          }}>
            <h3 style={{ marginBottom: '20px', color: '#1e40af', fontSize: '20px', fontWeight: '600' }}>🔧 Setup Instructions:</h3>
            <ol style={{ paddingLeft: '20px', color: '#475569', fontSize: '15px' }}>
              <li style={{ marginBottom: '10px' }}>Copy <code style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2px 6px', borderRadius: '4px', color: '#1d4ed8' }}>.env.example</code> to <code style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2px 6px', borderRadius: '4px', color: '#1d4ed8' }}>.env</code></li>
              <li style={{ marginBottom: '10px' }}>Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}>Google AI Studio</a></li>
              <li style={{ marginBottom: '10px' }}>Add your API key to the <code style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '2px 6px', borderRadius: '4px', color: '#1d4ed8' }}>.env</code> file</li>
              <li style={{ marginBottom: '10px' }}>Restart the development server</li>
            </ol>
            <p style={{ marginTop: '20px', fontSize: '14px', color: '#64748b', padding: '12px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
              💡 Check the console for detailed error messages
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='main'>
      <div className='nav'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/chatgem-icon.svg" alt="ChatGem" style={{ width: '32px', height: '32px' }} />
          <p>ChatGem</p>
        </div>
        <img src={user} alt="User Avatar" />
      </div>

      <div className='main-container'>
        {messages.length === 0 ? (
          <>
            <div className='greet'>
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className='cards'>
              <div className='card' onClick={() => handleQuickPrompt("Suggest beautiful places to see on an upcoming road trip")}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <div className='card-icon'><GiCompass /></div>
              </div>

              <div className='card' onClick={() => handleQuickPrompt("Briefly summarize this concept: urban planning")}>
                <p>Briefly summarize this concept: urban planning</p>
                <div className='card-icon'><IoBulbOutline /></div>
              </div>

              <div className='card' onClick={() => handleQuickPrompt("Brainstorm team bonding activities for our work retreat")}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <div className='card-icon'><FaRegMessage /></div>
              </div>

              <div className='card' onClick={() => handleQuickPrompt("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <div className='card-icon'><FaCode /></div>
              </div>
            </div>
          </>
        ) : (
          <div className='chat-container'>
            <div className='chat-messages'>
              {messages.map((message, index) => (
                <div key={index} className={`chat-bubble ${message.sender}`}>
                  <div className="avatar">
                    {message.sender === 'user'
                      ? <img src={user} alt="User" />
                      : <span className="ai-icon"><HiSparkles /></span>
                    }
                  </div>
                  <div className="bubble-content">
                    {message.sender === 'ai' ? (
                      <div className="message-text markdown">
                        <ReactMarkdown>{message.text}</ReactMarkdown>
                      </div>
                    ) : (
                      <p 
                        className="message-text" 
                        dangerouslySetInnerHTML={{ __html: message.text }} 
                      />
                    )}
                  </div>
                  {message.timestamp && (
                    <span className="message-timestamp">{message.timestamp}</span>
                  )}
                </div>
              ))}

              {loading && (
                <div className='chat-bubble ai'>
                  <div className="avatar"><span className="ai-icon"><HiSparkles /></span></div>
                  <div className="bubble-content typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        <div className='main-bottom'>
          <form onSubmit={handleSubmit} className='search-box'>
            <input 
              type="text" 
              placeholder='Enter a prompt here' 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <span><BiImageAdd /></span>
              <span><HiOutlineMicrophone /></span>
              <button type="submit"><IoSend /></button>
            </div>
          </form>
          <p className='bottom-info'>
            ChatGem may display inaccurate info, including about people. Double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;