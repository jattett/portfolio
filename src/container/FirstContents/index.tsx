import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import Styled from './Styled';

interface FirstContentsProps {
  onScrollDown?: () => void;
}

const FirstContents: React.FC<FirstContentsProps> = memo(({ onScrollDown }) => {
  const mainText = "Gyumin_DEV";
  const { displayText: mainDisplayText, isComplete: mainComplete } = useTypingAnimation({
    text: mainText,
    speed: 80, // 더 빠른 속도
    delay: 0.5, // 더 짧은 딜레이
  });

  const subText = "Frontend Developer & Creative Coder";
  const { displayText: subDisplayText, isComplete: subComplete } = useTypingAnimation({
    text: subText,
    speed: 50, // 더 빠른 속도
    delay: 2, // 더 짧은 딜레이
  });

  const handleScroll = useCallback(() => {
    onScrollDown?.();
  }, [onScrollDown]);

  const floatingTexts = [
    { text: 'CodeSmith', position: 'left', delay: 0, size: 30 },
    { text: 'TechNomad', position: 'right', delay: 0.5, size: 27 },
    { text: 'AlgoArtist', position: 'left', delay: 1, size: 54 },
    { text: 'PixelCrafter', position: 'right', delay: 1.5, size: 54 },
    { text: 'DataWarrior', position: 'left', delay: 2, size: 27 },
    { text: 'StackTactician', position: 'right', delay: 2.5, size: 30 },
  ];

  return (
    <Styled>
      {/* Enhanced floating background texts */}
      {floatingTexts.map((item, index) => (
        <motion.div
          key={index}
          className={`${item.position}-text ${index < 2 ? 'first' : index < 4 ? 'second' : 'third'}`}
          initial={{ 
            opacity: 0,
            x: item.position === 'left' ? -200 : 200,
            y: item.position === 'left' ? -50 : 50,
            scale: 0.8,
            rotate: item.position === 'left' ? -5 : 5
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            x: [item.position === 'left' ? -200 : 200, 0, 0, item.position === 'left' ? -100 : 100],
            y: [item.position === 'left' ? -50 : 50, 0, 0, item.position === 'left' ? -25 : 25],
            scale: [0.8, 1, 1, 0.9],
            rotate: [item.position === 'left' ? -5 : 5, 0, 0, item.position === 'left' ? -2 : 2]
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.2, 0.8, 1]
          }}
          style={{ fontSize: `${item.size}px` }}
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 30px #39ff14, 0 0 60px #39ff14"
          }}
        >
          {item.text}
        </motion.div>
      ))}
      
      {/* Enhanced main text with typing animation */}
      <motion.div
        className="main-text-container"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 0.5, 
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {/* Main title with enhanced typing effect */}
        <motion.h1
          className="main-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {mainDisplayText}
          {!mainComplete && (
            <motion.span
              className="cursor main-cursor"
              animate={{ 
                opacity: [1, 0, 1],
                scale: [1, 1.2, 1],
                textShadow: [
                  "0 0 10px #39ff14, 0 0 20px #39ff14",
                  "0 0 20px #39ff14, 0 0 40px #39ff14",
                  "0 0 10px #39ff14, 0 0 20px #39ff14"
                ]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ display: 'inline-block' }}
            >
              _
            </motion.span>
          )}
        </motion.h1>

        {/* Subtitle with typing effect */}
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          {subDisplayText}
          {!subComplete && (
            <motion.span
              className="cursor sub-cursor"
              animate={{ 
                opacity: [1, 0, 1],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ display: 'inline-block' }}
            >
              _
            </motion.span>
          )}
        </motion.p>

        {/* Glowing effect after typing is complete */}
        {mainComplete && subComplete && (
          <motion.div
            className="completion-glow"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="glow-ring"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </motion.div>
      
      {/* Enhanced scroll arrow */}
      <motion.div
        className="scroll-arrow"
        onClick={handleScroll}
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 5, 
          duration: 0.8,
          ease: "backOut"
        }}
        whileHover={{ 
          scale: 1.2,
          y: -5,
          filter: "drop-shadow(0 0 20px rgba(57, 255, 20, 0.8))"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="arrow-container"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="arrow-icon"
            whileHover={{
              rotate: 360,
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <MdOutlineKeyboardDoubleArrowDown size="3.5rem" color="#cdcdcd" />
          </motion.div>
        </motion.div>
        
        {/* Pulse effect around arrow */}
        <motion.div
          className="pulse-ring"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Enhanced background particles */}
      <motion.div
        className="particles"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </Styled>
  );
});

FirstContents.displayName = 'FirstContents';

export default FirstContents;
