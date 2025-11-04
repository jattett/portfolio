'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { useTypingAnimation } from '@/hooks/useTypingAnimation'

export function FirstContentSection() {
  const mainText = 'Gyumin_DEV'
  const { displayText: mainDisplayText, isComplete: mainComplete } =
    useTypingAnimation({
      text: mainText,
      speed: 80,
      delay: 0.5,
    })

  const subText = 'Frontend Developer & Creative Coder'
  const { displayText: subDisplayText } = useTypingAnimation({
    text: subText,
    speed: 50,
    delay: 2,
  })

  const handleScroll = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {mainDisplayText}
            {!mainComplete && (
              <motion.span
                className="inline-block w-1 h-16 bg-primary-500 ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {subDisplayText}
          </motion.p>

          <motion.button
            onClick={handleScroll}
            className="text-primary-600 hover:text-primary-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdKeyboardDoubleArrowDown className="text-4xl animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

