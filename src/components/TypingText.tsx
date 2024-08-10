import React, { useState, useEffect } from 'react';
import './TypingText.css';

const TypingText: React.FC<{ textInput: string }> = ({ textInput }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const text = textInput.slice(0, 1) + textInput.charAt(1) + textInput.slice(1);

  useEffect(() => {
    let index = 0;

    const typeCharacter = () => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;

      if (index >= text.length) {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeCharacter, 50); // Adjust typing speed here (milliseconds per character)

    return () => clearInterval(typingInterval);
  }, [text]);

  useEffect(() => {
    if (isTypingComplete) {
      const fadeOutTimeout = setTimeout(() => {
        setDisplayedText('');
      }, 3000); // Stay for 3 seconds after typing is complete

      return () => clearTimeout(fadeOutTimeout);
    }
  }, [isTypingComplete]);

  return (
    <div className={`typing-text ${isTypingComplete ? 'fade-out' : ''}`}>
      {displayedText}
      {!isTypingComplete && <span className="cursor">|</span>}
    </div>
  );
};

export default TypingText;
