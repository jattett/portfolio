'use client'

import { motion } from 'framer-motion'
import { MdCode, MdPalette, MdWork } from 'react-icons/md'
import infoData from '@/data/info.json'
import Image from 'next/image'

const iconMap: Record<string, React.ReactNode> = {
  code: <MdCode />,
  palette: <MdPalette />,
  work: <MdWork />,
}

export function InfoSection() {
  const experiences = infoData.experiences.map((exp) => ({
    icon: iconMap[exp.icon] ?? <MdCode />,
    title: exp.title,
    description: exp.description,
  }))

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-gray-700 leading-relaxed"
          >
            <p>
              끊임없이 학습하며 성장하는 프론트엔드 개발자 강규민입니다.
              퍼블리셔로 경력을 시작해 웹·모바일 전반의 UI/UX 구현 경험을 쌓았으며, 이후 React와 TypeScript를 중심으로 한 프론트엔드 개발자로 전향했습니다.
            </p>
            <p>
              SK하이닉스, KB국민은행, 우리은행 등 다수의 대형 프로젝트에 참여하며 디자인 시스템 구축, 공통 컴포넌트화, 반응형 웹 퍼블리싱, 글로벌 스타일 모듈화 등 재사용성과 유지보수성을 극대화한 개발 경험을 보유하고 있습니다.
            </p>
            <p>
              최근에는 Spring Boot와 MySQL을 기반으로 API 서버 및 백엔드 로직을 직접 구축하고, LangChain, Whisper, Gemini API를 연동하여 AI 기반 기능을 프론트엔드와 통합하는 등 풀스택 영역으로 역량을 확장하고 있습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/me.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-primary-700 text-center mb-12">
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl text-primary-500 mb-4 flex justify-center">
                  {exp.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {exp.title}
                </h4>
                <p className="text-gray-600 text-center leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

