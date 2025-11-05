'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'

// 비눗방울 컴포넌트
function Bubble({ delay, size, left }: { delay: number; size: number; left: number }) {
  const [windowHeight, setWindowHeight] = useState(800)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  return (
    <motion.div
      className="absolute rounded-full border-2 border-primary-300/30"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: '-10%',
        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(59,130,246,0.1))',
      }}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0.3, 0],
        y: -windowHeight - 100,
        scale: [0, 1, 1.1, 1.2],
        x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        ease: 'easeOut',
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
      }}
    />
  )
}

// 파티클 컴포넌트
function Particle({ index }: { index: number }) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  return (
    <motion.div
      className="absolute w-1 h-1 bg-primary-400 rounded-full"
      initial={{
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        opacity: 0,
      }}
      animate={{
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: 'easeInOut',
      }}
    />
  )
}

export function FirstContentSection() {
  const mainText = 'Gyumin_DEV'
  const subText = 'Frontend Developer & Creative Coder'

  const handleScroll = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  // 비눗방울 생성
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    size: 20 + Math.random() * 60,
    left: Math.random() * 100,
  }))

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
              scale: [1, 1.1, 1],
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

      {/* 비눗방울 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            delay={bubble.delay}
            size={bubble.size}
            left={bubble.left}
          />
        ))}
      </div>

      {/* 파티클 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={`particle-${i}`} index={i} />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 메인 타이틀 */}
          <motion.div
            className="relative inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: 'spring', stiffness: 200 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent relative text-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              {mainText}
            </motion.h1>
            
            {/* 글로우 효과 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-accent-500/20 blur-3xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* 서브 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -5, 0],
              }}
              transition={{ 
                delay: 0.5,
                duration: 0.8,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              {subText}
            </motion.p>
          </motion.div>

          {/* 스크롤 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <motion.button
              onClick={handleScroll}
              className="text-primary-600 hover:text-primary-700 transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <MdKeyboardDoubleArrowDown className="text-4xl relative z-10" />
              </motion.div>
              
              {/* 버튼 글로우 효과 */}
              <motion.div
                className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <motion.span
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Scroll Down
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

