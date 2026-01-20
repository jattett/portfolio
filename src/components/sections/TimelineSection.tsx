'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MdClose, MdInfoOutline } from 'react-icons/md'
import timelineDataJson from '@/data/timeline.json'

interface Project {
  period?: string
  name: string
  description: string
  skills: string[]
  details: string[]
}

interface TimelineItem {
  id: number
  year: string
  title: string
  company: string
  description: string
  projects: Project[]
}

export function TimelineSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<TimelineItem | null>(null)

  const timelineData: TimelineItem[] = timelineDataJson as TimelineItem[]

  const openModal = (item: TimelineItem) => {
    setModalContent(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent(null)
  }

  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            My Timeline
          </h2>
          <p className="text-lg text-gray-600">
            클릭하여 상세 정보를 확인하세요
          </p>
        </motion.div>

        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-accent-300"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20 group"
              >
                {/* 타임라인 마커 */}
                <motion.div
                  className="absolute left-6 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(59, 130, 246, 0.4)',
                      '0 0 0 8px rgba(59, 130, 246, 0)',
                      '0 0 0 0 rgba(59, 130, 246, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 cursor-pointer relative overflow-hidden"
                  onClick={() => openModal(item)}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* 호버 시 배경 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <span className="text-primary-600 font-bold text-lg">
                          {item.year}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{item.company}</span>
                      </div>
                      <motion.div
                        className="flex items-center gap-2 text-primary-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <MdInfoOutline />
                        <span>클릭하여 상세보기</span>
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    
                    {/* 클릭 힌트 (모바일용) */}
                    <div className="mt-3 pt-3 border-t border-gray-100 group-hover:border-primary-200 transition-colors">
                      <span className="text-xs text-primary-500 font-medium">
                        프로젝트 {item.projects.length}개 보기 →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <MdClose className="text-2xl text-gray-600" />
                </button>

                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {modalContent.title}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span className="text-primary-600 font-semibold">
                      {modalContent.year}
                    </span>
                    <span>•</span>
                    <span>{modalContent.company}</span>
                  </div>
                  <p className="text-gray-600">{modalContent.description}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    주요 프로젝트
                  </h3>
                  <div className="space-y-6">
                    {modalContent.projects.map((project: Project, index: number) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-xl font-semibold text-gray-800">
                                {project.name}
                              </h4>
                              {project.period && (
                                <span className="text-sm text-primary-600 font-medium">
                                  {project.period}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.skills.map((skill: string, skillIndex: number) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <ul className="space-y-1">
                              {project.details.map((detail: string, detailIndex: number) => {
                                const isBold = detail.startsWith('***')
                                const displayText = isBold ? detail.replace(/^\*\*\*\s*/, '') : detail
                                
                                if (!detail.trim()) {
                                  return <li key={detailIndex} className="h-2" />
                                }
                                
                                return (
                                  <li
                                    key={detailIndex}
                                    className={`flex items-start text-gray-600 text-sm ${isBold ? 'mt-3 mb-1' : ''}`}
                                  >
                                    {!isBold && <span className="text-primary-500 mr-2">•</span>}
                                    <span className={isBold ? 'font-bold text-gray-800 text-base' : ''}>
                                      {displayText}
                                    </span>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

