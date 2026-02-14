'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface TimelineEvent {
  id: string
  date: string
  title: string
  image?: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const element = timelineRef.current
      const elementRect = element.getBoundingClientRect()
      const elementTop = elementRect.top
      const elementHeight = elementRect.height
      const windowHeight = window.innerHeight

      // Calculate progress: 0 when element top is at bottom of window, 1 when element bottom is at top of window
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        )
      )

      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative py-20 px-4 scroll-animation">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Timeline Damar ❤️ Sachi
          </h2>
          <p className="text-lg text-muted-foreground">
            Jadi begini kronologinya:v
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Progress Bar Background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2" />

          {/* Animated Progress Bar */}
          <div
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2 transition-all duration-300"
            style={{ height: `${progress * 100}%` }}
          />

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative transition-all duration-700 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                } ${
                  progress >= (index ) / (events.length )
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-60 translate-y-4'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2">
                  <div className={`relative w-5 h-5 rounded-full border-4 border-background transition-all duration-500 ${
                    progress > (index + 1) / (events.length + 1)
                      ? 'bg-primary scale-125'
                      : 'bg-muted scale-100'
                  }`} />
                  <div className={`absolute inset-0 rounded-full bg-primary animate-pulse ${
                    progress > (index + 1) / (events.length + 1)
                      ? 'opacity-50'
                      : 'opacity-0'
                  }`} />
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} px-4 md:px-8`}>
                  <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    {event.image && (
                      <div className="relative mb-4 w-full h-[200px] bg-gray-200 rounded-xl overflow-hidden transition duration-500">
                        <Image
                          src={event.image}
                          alt="Album 1"
                          fill
                          sizes="200px"
                          className="object-cover"
                          priority
                        />
                      </div>
                    )}
                    <time className="text-sm font-semibold text-primary">
                      {event.date}
                    </time>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
