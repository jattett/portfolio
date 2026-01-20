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
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-3xl font-bold text-primary-700 mb-6">자기소개</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                안녕하세요. 사용자 경험을 최우선으로 생각하며, 견고하고 확장 가능한 프론트엔드 시스템을 구축하는 것을 즐기는 개발자입니다.
              </p>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">기술적 역량과 철학</h3>
                <p className="mb-4">
                  TypeScript, React, Next.js를 기반으로 한 모던 프론트엔드 개발에 익숙하며, 단순히 기능을 구현하는 것을 넘어 사용자와 개발자 모두에게 가치를 제공하는 코드를 작성하기 위해 노력합니다.
                </p>
                <p>
                  최근 UpStage Enterprise AI Work Space 프로젝트에서 대규모 엔터프라이즈 애플리케이션의 프론트엔드를 설계하고 구축했습니다. 이 과정에서 가장 중요하게 생각한 것은 <strong>실제 사용 가능한 기능을 정확하게 구현</strong>하는 것이었습니다. 과장된 수치나 이론적인 설명보다는, 코드베이스에 실제로 존재하고 동작하는 기능들을 기반으로 개발했습니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">복잡한 문제 해결 경험</h3>
                <p className="mb-4">
                  <strong>계층적 권한 관리 시스템</strong>을 구축하면서 USR, SVC, ITA, SEC, EVA, ROT 등 다양한 역할의 세분화된 권한 체계를 설계했습니다. 단일 사용자의 복수 권한 지원과 동적 권한 검증 로직을 구현하며, PermissionGuard 컴포넌트를 통해 라우트 레벨에서의 보안을 강화했습니다.
                </p>
                <p>
                  <strong>문서 정보추출(IE) 시스템</strong>에서는 사용자와 관리자 양쪽의 요구사항을 모두 만족시키는 것이 도전이었습니다. 사용자 IE 갤러리부터 프로세스 페이지, 결과 페이지까지 전체 플로우를 설계하면서, 무한 스크롤과 React Query 기반 폴링 시스템을 구현해 실시간 상태 업데이트를 구현했습니다. requestAnimationFrame을 활용한 스크롤 최적화로 성능을 개선했고, 최대 1,000개 파일의 동시 업로드를 지원하는 시스템을 구축했습니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">상태 관리와 성능 최적화</h3>
                <p>
                  Zustand와 SWR, React Query를 적절히 조합하여 상태 관리 전략을 수립했습니다. 특히 추출 과정별 상태 저장/복원 시스템을 구현하여 사용자 작업 중단 시점을 100% 복원할 수 있도록 했습니다. SWR 캐싱 전략을 통해 API 호출 횟수를 크게 줄였고, React Query의 폴링 기능을 활용해 실시간 데이터 동기화를 구현했습니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">사용자 중심 사고</h3>
                <p>
                  기능 구현에 그치지 않고, 사용자 경험을 개선하기 위한 세부 기능들도 신경 썼습니다. IE LNB의 최근 항목 시스템을 구현하여 사용자가 자주 사용하는 작업에 빠르게 접근할 수 있도록 했고, 전역 함수와 커스텀 이벤트를 활용한 실시간 업데이트로 사용자 편의성을 높였습니다. 스켈레톤 UI를 적용하여 로딩 중에도 자연스러운 사용자 경험을 제공했습니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">협업과 소통</h3>
                <p>
                  복잡한 시스템을 구축하면서 가장 중요하게 생각한 것은 <strong>명확한 코드 구조와 문서화</strong>였습니다. Admin/User 이중 구조의 LNB를 설계할 때 코드 재사용률을 높이기 위해 공통 컴포넌트를 추출했고, 실험적 메뉴 관리 시스템을 통해 A/B 테스트 인프라를 구축했습니다.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">앞으로의 목표</h3>
                <p>
                  현재까지의 경험을 바탕으로, 더욱 확장 가능하고 유지보수가 쉬운 프론트엔드 아키텍처를 설계하고 싶습니다. 특히 대규모 데이터 처리와 실시간 동기화, 복잡한 상태 관리에 대한 깊이 있는 이해를 바탕으로, 사용자에게 더 나은 경험을 제공할 수 있는 시스템을 만들어가고 싶습니다.
                </p>
                <p className="mt-4">
                  기술적 완성도와 사용자 경험의 균형을 맞추며, 팀과 함께 성장하는 개발자가 되겠습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

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

