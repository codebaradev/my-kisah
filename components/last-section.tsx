'use client'

import Image from 'next/image'

export function LastSection() {
  const images = [
    '/assets/date/damar_kopken_1.jpg',
    '/assets/date/sachi_kopken_1.jpg',
    '/assets/albums/0.jpeg',
    '/assets/date/kopken_sachi_roblox.jpg',
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-pink-50/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center ">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Last 💖
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nah lalu yang terakhir, mauka ji bilang sangat kusuka dan cinta banget ka sama Sachi. Ntah itu kapan dan dimana kalau ada masalah ta, berharap ka bisa ki selesaikan tanpa ada kata 'Putus'. Serius banget ma sama kamu banyak hal yang sudah muubah ka, terimakasih sekali Sachi :)
            </p>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Terimakasih Sachi, maaf banget kalau ada salah ku terutama saya yang tidak pekaan. Maaf juga kalau kecewa ki sama diriku yang asli :). 
            </p>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Berharap ka langgeng terus hubungan ta, dan yap kusayang sekali ki 😭
            </p>
          </div>

        <div className='flex justify-end items-center'>
          <div
            className="relative w-[300px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >
            <Image
                src="/assets/date/kopken_stair.jpg"
                alt="stair"
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
