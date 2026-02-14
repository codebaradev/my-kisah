'use client'

import {  Heart, Sparkles, Star, Gift  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  const scrollToMessages = () => {
    const element = document.getElementById('start')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-pink-50 to-background flex items-center justify-center overflow-hidden py-20 scroll-animation">

      {/* ✨ Floating Cute Icons Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* Top Left */}
        <Sparkles className="absolute top-16 left-20 w-8 h-8 text-pink-400 opacity-70 animate-pulse" />

        {/* Top Right */}
        <Star className="absolute top-24 right-24 w-10 h-10 text-yellow-400 opacity-60 animate-spin slow-spin" />

        {/* Bottom Left */}
        <Heart className="absolute bottom-32 left-16 w-12 h-12 text-rose-400 opacity-50 fill-rose-400 animate-bounce" />

        {/* Bottom Right */}
        <Gift className="absolute bottom-20 right-20 w-9 h-9 text-purple-400 opacity-70 animate-pulse" />

        {/* Random floating */}
        <Heart className="absolute top-1/3 left-1/4 w-6 h-6 text-pink-300 opacity-60 fill-pink-300 animate-ping" />
        <Sparkles className="absolute bottom-1/3 right-1/4 w-7 h-7 text-yellow-300 opacity-60 animate-pulse" />

      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-24 h-32 rotate-[-12deg] opacity-30 blur-[1px] animate-float">
          <Image
            src={"/assets/date/kopken_titis_1.jpg"}
            alt="damar"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="absolute top-40 right-16 w-20 h-28 rotate-[15deg] opacity-25 animate-float-slow">
          <Image
            src={"/assets/date/kopken_titis_3.jpg"}
            alt="sachi"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="absolute bottom-16 left-1/4 w-24 h-32 rotate-[8deg] opacity-30 blur-[1px] animate-float">
          <Image
            src={"/assets/date/kopken_stair.jpg"}
            alt="memory"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="absolute bottom-24 right-1/4 w-20 h-28 rotate-[-10deg] opacity-25 animate-float-slow">
          <Image
            src={"/assets/date/kopken_titis_2.jpg"}
            alt="damar"
            fill
            className="object-cover rounded-xl"
          />
        </div>

      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-40 opacity-10">
        <Heart className="w-32 h-32 text-primary fill-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Heart className="w-40 h-40 text-secondary fill-secondary" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Decorative heart above text */}
        <div className="mb-6 inline-block">
          <Heart className="w-12 h-12 text-primary fill-primary animate-bounce" />
        </div>

        <div className="flex justify-center items-center mb-8">
          <div className="relative flex items-center">
            {/* Left Page */}
            <div className="relative w-[170px] h-[200px] md:w-[220px] md:h-[260px] bg-white rounded-l-2xl shadow-2xl overflow-hidden rotate-[-3deg] origin-right">
              <Image
                src={"/assets/date/damar_kopken_1.jpg"}
                alt="Damar"
                fill
                className="object-cover"
              />
            </div>

            {/* Center Heart */}
            <div className="absolute z-20 flex items-center justify-center w-full">
              <div className="bg-white rounded-full p-4 shadow-xl border-4 border-pink-200">
                <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse" />
              </div>
            </div>

            {/* Right Page */}
            <div className="relative w-[170px] h-[200px] md:w-[220px] md:h-[260px] bg-white rounded-r-2xl shadow-2xl overflow-hidden rotate-[3deg] origin-left">
              <Image
                src={"/assets/date/sachi_kopken_1.jpg"}
                alt="Sachi"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Valentine Part 1
          </span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 text-balance mb-4 leading-relaxed">
          Omagattoooo, llezzz goo hari valentine pertama kita yank :3
        </p>

        <p className="text-md text-muted-foreground text-balance mb-10 leading-relaxed">
          Maaf semua pesan untuk valentine kali ini, aku buat lewat web ajah soalnya tulisan aku burik. Dan maaf kalau web yang aku buat ini tidak sesuai ekspetasi kamu. Tapi aku mohon kamu baca dan lihat sampai terakhir yah :)
        </p>  

        {/* CTA Button */}
        <Button
          onClick={scrollToMessages}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Jom lihat-lihat
        </Button>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <div>
      </div>
    </section>
  )
}
