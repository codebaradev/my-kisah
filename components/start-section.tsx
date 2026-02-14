'use client'

import Image from 'next/image'

export function StartSection() {
  return (
    <section id="start" className="py-24 px-6 bg-gradient-to-b from-background to-pink-50/40">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-[180px] md:w-[220px] aspect-[4/5] 
                        rotate-[-6deg] rounded-xl overflow-hidden shadow-lg
                        transition duration-500 hover:scale-105
                        scroll-slide-left"
            >
              <Image
                src="/assets/date/damar_kopken_2.jpg"
                alt="left"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Damchi 💖
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Saaccchhiiiii, Sachi yang cantik, manis, lucu, lugu, dan sangat kawaiii. Izinkan aku menyampaikan beberapa data dan informasi yang ingin aku sampaikan kepada kamu, kita mulai dulu dari kronologi awal mula aku suka kamu :3
            </p>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              (Wah, maap kalau ada bahasa ku yang agak laen:v)
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div
              className="relative w-[180px] md:w-[220px] aspect-[4/5]
                         rotate-[6deg] rounded-xl overflow-hidden shadow-lg
                         transition duration-500 hover:rotate-[3deg] hover:scale-105"
            >
              <Image
                src="/assets/date/sachi_kopken_2.jpg"
                alt="right"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
