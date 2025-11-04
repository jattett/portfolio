'use client'

import { Suspense } from 'react'
import { ContactSection } from '@/components/sections/ContactSection'
import { FirstContentSection } from '@/components/sections/FirstContentSection'
import { InfoSection } from '@/components/sections/InfoSection'
import { ProjectSection } from '@/components/sections/ProjectSection'
import { TimelineSection } from '@/components/sections/TimelineSection'
import { BoardSection } from '@/components/sections/BoardSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <FirstContentSection />
        <InfoSection />
        <ProjectSection />
        <TimelineSection />
        <BoardSection />
        <ContactSection />
      </Suspense>
    </main>
  )
}

