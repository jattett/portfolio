'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import projectsData from '@/data/projects.json'
import Image from 'next/image'

interface ProjectItem {
  id: number
  title: string
  description: string
  mainimage?: string
  image?: string
  images?: string[]
  subdescription?: string[]
  features?: string[]
  skill?: string[]
  technologies?: string[]
  githublink?: string
  link?: string
  playlink?: string
  demo?: string
}

export function ProjectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  )
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

  const projects = projectsData as ProjectItem[]

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    setActiveImageIndex(0)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600">
            클릭하여 프로젝트 상세 정보를 확인하세요
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100"
              onClick={() => openModal(project)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100">
                <Image
                  src={project.mainimage ?? project.image ?? ''}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(project.skill ?? project.technologies ?? [])
                    .slice(0, 3)
                    .map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
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
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <MdClose className="text-2xl text-gray-600" />
                </button>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary-100 to-accent-100">
                        {(() => {
                          const images: string[] = Array.isArray(selectedProject.images) ? selectedProject.images : []
                          const mainSrc: string = images.length > 0
                            ? images[Math.min(activeImageIndex, images.length - 1)]
                            : (selectedProject.mainimage ?? selectedProject.image ?? "")
                          return (
                            <Image
                              src={mainSrc}
                              alt={selectedProject.title}
                              fill
                              className="object-cover"
                            />
                          )
                        })()}
                      </div>

                      {Array.isArray(selectedProject.images) && selectedProject.images.length > 0 && (
                        <div className="grid grid-cols-4 gap-2 mb-6">
                          {selectedProject.images.map((src: string, idx: number) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveImageIndex(idx)}
                              className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                idx === activeImageIndex
                                  ? 'border-primary-500'
                                  : 'border-gray-200'
                              }`}
                            >
                              <Image
                                src={src}
                                alt={`${selectedProject.title}-${idx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                          사용 기술
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {(selectedProject.skill ?? selectedProject.technologies ?? []).map(
                            (tech: string, index: number) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                          주요 내용
                        </h3>
                        <ul className="space-y-2">
                          {(selectedProject.subdescription ?? selectedProject.features ?? []).map(
                            (line: string, index: number) => (
                              <li key={index} className="flex items-start text-gray-600">
                                <span className="text-primary-500 mr-2">•</span>
                                <span>{line}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="flex gap-3">
                        {(selectedProject.githublink ?? selectedProject.link) && (
                          <a
                            href={selectedProject.githublink ?? selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            <FaGithub />
                            GitHub
                          </a>
                        )}
                        {(selectedProject.playlink ?? selectedProject.demo) && (
                          <a
                            href={selectedProject.playlink ?? selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                          >
                            <FiExternalLink />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
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

