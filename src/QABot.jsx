import React, { useState, useRef, useEffect } from 'react';
import './QABot.css';

const qaPairs = [
  { question: 'What is a bacteriophage?', answer: 'A bacteriophage is a type of virus that infects and replicates within bacteria.' },
  { question: 'How do bacteriophages work?', answer: 'They attach to bacteria, inject their genetic material, and use the bacterial machinery to reproduce.' },
  { question: 'Are bacteriophages used in medicine?', answer: 'Yes, they are being researched and used as alternatives to antibiotics for treating bacterial infections.' },
  { question: 'Are bacteriophages safe?', answer: 'Generally, yes. They specifically target bacteria and do not infect human cells.' },
  { question: 'Where can I learn more?', answer: 'You can learn more from scientific articles, educational websites, or by contacting our team.' },
];

const defaultAnswer = "I'm sorry, I don't know the answer to that yet. Please try one of the preset questions!";

export default function QABot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi! Ask me about bacteriophages:' }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = (question) => {
    const userQuestion = question || input.trim();
    if (!userQuestion) return;
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: userQuestion }
    ]);
    // Find answer
    const found = qaPairs.find(qa => qa.question.toLowerCase() === userQuestion.toLowerCase());
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: found ? found.answer : defaultAnswer }
      ]);
    }, 400);
    setInput('');
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {!open && (
        <button className="qa-bot-fab" onClick={() => setOpen(true)} aria-label="Open chat">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="url(#chat-gradient)"/>
            <path d="M14 20C14 17.7909 15.7909 16 18 16H30C32.2091 16 34 17.7909 34 20V28C34 30.2091 32.2091 32 30 32H20L14 34V20Z" fill="#fff"/>
            <defs>
              <linearGradient id="chat-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00bfae"/>
                <stop offset="1" stop-color="#2196f3"/>
              </linearGradient>
            </defs>
          </svg>
        </button>
      )}
      {open && (
        <div className="qa-bot-container">
          <div className="qa-bot-header">
            <span className="qa-bot-header-title">DR.MIKE</span>
            <button className="qa-bot-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="qa-bot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`qa-bot-bubble ${msg.sender}`}>{msg.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="qa-bot-questions">
            {qaPairs.map((qa, idx) => (
              <button
                key={idx}
                className="qa-bot-question"
                onClick={() => handleSend(qa.question)}
              >
                {qa.question}
              </button>
            ))}
          </div>
          <div className="qa-bot-input-row">
            <input
              className="qa-bot-input"
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              autoFocus={open}
            />
            <button className="qa-bot-send" onClick={() => handleSend()} disabled={!input.trim()}>
              <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#2196f3" d="M2 21l21-9-21-9v7l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
} 