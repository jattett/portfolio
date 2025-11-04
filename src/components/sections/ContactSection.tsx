'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaPhone, FaGlobe } from 'react-icons/fa'
import contactData from '@/data/contact.json'
import { useState } from 'react'

interface ContactItemJson {
  id: string
  icon: string
  title: string
  content: string
  link: string
  color: string
}

const contactIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub />,
  email: <FaEnvelope />,
  phone: <FaPhone />,
  website: <FaGlobe />,
}

export function ContactSection() {
  const contactItems = (contactData as ContactItemJson[]).map((item) => ({
    ...item,
    icon: contactIconMap[item.icon] ?? null,
  }))

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600">
            함께 일하고 싶으시다면 언제든 연락주세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <ContactCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  item,
  index,
}: {
  item: ContactItemJson & { icon: React.ReactNode }
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group"
    >
      <motion.a
        href={item.link}
        target={item.id === 'email' ? undefined : '_blank'}
        rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
        className="block p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-primary-300"
        whileHover={{ y: -5 }}
      >
        <motion.div
          className="text-4xl text-primary-500 mb-4 flex justify-center"
          animate={hovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {item.icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 text-center break-all">
          {item.content}
        </p>
      </motion.a>
    </motion.div>
  )
}

