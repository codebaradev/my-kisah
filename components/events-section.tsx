'use client'

import { Calendar, MapPin } from 'lucide-react'

interface Event {
  id: number
  title: string
  date?: string
  location: string
  image: string
  description: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'Foto Berduaan Pertama 👉👈',
    date: 'Akhir tahun',
    location: 'Sobat Kopi',  
    image: '/assets/bareng/bareng_1.jpg',
    description: "'Sachi boleh foto sama?', 'boleh' . AAAAaaaaaaaarrrgggggggghhhhh mauka pinsan >_<",
  },
  {
    id: 2,
    title: 'Doksli (Dokumen Asli) Confess',
    date: 'Akhir tahun',
    location: 'Aula Kampus 1 ITH',  
    image: '/assets/date/confess.jpeg',
    description: "Aseli aku gugup banget, sangat sangat gugup. Tapi untung aku mullet pas disini:v",
  },
  {
    id: 3,
    title: 'Tembus Pagi Bareng di Kopken 💀',
    date: 'Akhir tahun',
    location: 'Kopken',  
    image: '/assets/date/kopken_ptc.png',
    description: 'Aseli, seorang Sachi tembus pagi diluar rumah. Lebih seru lagi kalau saya yang antar kamu pulang:v',
  },
  {
    id: 4,
    title: 'Menamatkan PTC Bersama',
    date: 'Akhir tahun',
    location: 'Aula Kampus 2 ITH',
    image: '/assets/bareng/ptc-1.jpg',
    description: 'Jujur kenapa kyk tidak mandi ka disini 💀, padahal mandi sangat bersih ka dirumah ',
  },
  {
    id: 5,
    title: 'Date Pertama',
    date: 'Akhir tahun',
    location: 'Sumpang',
    image: '/assets/date/first-date.jpg',
    description: 'Aseli enak eskrimnya, maaf di date pertama kita aku cuman bawa kamu ke sumpang sambil makan eskrim :)',
  },
  {
    id: 6,
    title: 'Malam Tahun Baru',
    date: 'July 22, 2023',
    location: 'Lapangan Andi Makassau',
    image: '/assets/date/tahun_baru_petasan.png',
    description: 'Gak nyangka ka bakalan seseru ini malam tahun baru ku. Terimakasih sekali Saacchiiiii 😭',
  },
  {
    id: 7,
    title: 'Kopken Date 1',
    date: 'September 10, 2023',
    location: 'Kopken',
    image: '/assets/date/kopken_titis_2.jpg',
    description: 'Lucunya Saacchiiii. Maaf kalau mengganggu kakak sepupuku, padahal aku ingin kita berdua ajah:v',
  },
  {
    id: 8,
    title: 'Kopken Date 2',
    date: 'December 25, 2023',
    location: 'Kopken',
    image: '/assets/date/kopken_date_2.jpg',
    description: 'Maaf kalau agak clingy banget ka disini astagfirullah 💀',
  },
  {
    id: 9,
    title: 'Perpus Date 1',
    date: 'January 8, 2024',
    location: 'Perpustakaan Kota',
    image: '/assets/date/perpus_date_1.jpg',
    description: 'Perpus Date muhehehheheheeheheheh. Whheeennnn yaaahhhhh. Tapi maaf rusak date ta gara-gara saya tidak bisa habiskan mie gacoan. Aseli gagal ka, padahal gacoan date pertama ta 🙏',
  },
]

export function EventsSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background scroll-animation">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Our Timeline
            </span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Event
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nah selanjutnya berikut beberapa event yang sudah kita lakukan :3
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-4">
                  {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary/60" />
                    <span>{event.date}</span>
                  </div> */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary/60" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Decorative Heart */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary fill-primary"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground italic">
            Dan masih banyak lagi.... 💕
            <br />
          </p>
        </div>
      </div>
    </section>
  )
}
