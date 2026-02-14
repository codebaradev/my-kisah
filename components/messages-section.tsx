'use client';

import { Card } from '@/components/ui/card'
import { Heart } from 'lucide-react'
import Image from 'next/image';

interface Message {
  title: string
  content: string
  emoji?: string
  iamge?: string
}

export function MessagesSection() {
  const messages: Message[] = [
    {
      title: 'Why I Love You',
      content:
        'Your smile brightens my darkest days. The way you laugh, the kindness in your eyes, and how you make even ordinary moments feel extraordinary.',
      emoji: '💕',
    },
    {
      title: 'Our Greatest Gift',
      content:
        "It's not just the big moments—it's the quiet mornings, the inside jokes, the way you hold my hand without thinking. You're my home.",
      emoji: '🏠',
    },
    {
      title: 'Forever With You',
      content:
        'Every chapter of our story has been worth it. From the first hello to this very moment, I choose you. Always you. Forever and always.',
      emoji: '✨',
    },
    {
      title: 'My Promise',
      content:
        "I promise to love you through every season, to chase dreams with you, to laugh until our bellies hurt, and to hold you tight when the world feels overwhelming.",
      emoji: '💍',
    },
  ]

  return (
    <section
      id="messages"
      className="py-20 px-4 bg-gradient-to-b from-background to-pink-50/50 scroll-animation"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Maaf kalau lebay yah
            </span>
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Pesan-pesan akuh untuk kamu
          </h2>
        </div>

        {/* Messages Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {messages.map((message, index) => (
            <Card
              key={index}
              className="group border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-pink-50/50"
            >
              <div className="p-8 flex items-center gap-2 relative">
                <div>
                  {/* Emoji and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{message.emoji}</div>
                    <h3 className="text-xl font-bold text-primary text-balance">
                      {message.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 leading-relaxed text-balance">
                    {message.content}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                {/* <div className="absolute top-0 -right-2">
                  <div className=" w-[50px] h-[50px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/assets/date/sachi_kopken_1.jpg"
                      alt="Sachi"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
