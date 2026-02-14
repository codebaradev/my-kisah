'use client';

import { HeroSection } from '@/components/hero-section'
import { MessagesSection } from '@/components/messages-section'
import { EventsSection } from '@/components/events-section'
import { Timeline } from '@/components/timeline'
import { AlbumSection } from '@/components/album-section'
import { Heart } from 'lucide-react'
import { LastSection } from '@/components/last-section';
import { StartSection } from '@/components/start-section';

const timelineEvents = [
  {
    id: '1',
    date: 'Semester 2 (2024)',
    title: 'Pertemuan Pertama',
    description: 'Kukenalki karena ada temanku tanyaka, wah ada anak kelas E vituber. Dan disitu sempat ki lewat dan disitulah aku pertama kali melihat Sachi versi misterius:v',
  },
  {
    id: '2',
    date: 'Semester 3 (2024)',
    image: '/assets/special/s3.jpg',
    title: 'Sama Kelas dan Kelompok',
    description: 'Disinilah aku mulai dekat dengan Sachi. Dimana aku sadar kalau kamu itu benar-benar tipe aku bangets. Kadang aku screenshot muka kamu kalau lagi zoom:v',
  },
  {
    id: '3',
    date: 'Semester 4 (2025)',
    title: 'Sama Kelas Lagi 😁',
    image: '/assets/special/s4.jpeg',
    description: 'Disemester 3 kemarin, perasaan aku ke kamu itu hanya sampai rasa kagum saja, dan aku berpikir bahwa rasa kagum ini hanya sementara. Tetapi ketika kita sama kelas lagi aku, aseli senang sekali ka bisa satu kelas dengan tipe ku. ',
  },
  {
    id: '4',
    date: 'Semester 4 (2025)',
    title: 'Rasa Suka pun Muncul',
    image: '/assets/special/poki.jpeg',
    description: 'Aku lagi capek-capeknya tidak ada angin tidak ada badai. Tiba-tiba kamu kasih aku poki, aseli bapek bercampur senang sekali aku. Pulang ka kek orang gila nyengir di jalanan sambil teriak aahhhh kenapa Saacchiiiiii. Disitulah rasa suka aku memuncak dan betul-betul aku beneran suka dan cinta sama kamu. Setelah itu setiap aku lihat kamu kyk ada efek-efek bunganya :3',
  },
  {
    id: '5',
    date: 'Semester 5 (2025)',
    title: 'Pergerakan',
    image: '/assets/special/kado-sachi.jpeg',
    description: 'Sangat disayangkan aku tidak sama kelas dengan cewek yang aku suka :(. Aseli kecewa sekali ka, padahal pede ka sama kelas ki. Nah baru disini juga sudah mulai ada pergerakan ku, karena ada orang tiba-tiba viral tiktoknya dan takut ka ada orang mau ambil i. Dan bentuk pergerakan ku itu kasih kamu kado :3',
  },
  {
    id: '6',
    date: '10 Desember 2025',
    title: 'Confess ❤️‍🔥',
    image: '/assets/date/confess.jpeg',
    description: 'Di tanggal ini aku sudah tidak tahan, banyak juga beberapa saran dan saya lihat sw mu dan aku pun harus confess. Aseli setelah ku antar kamu kekampus, aku briefing dulu dimesjid dan aseli gugup sekali ka sampai-sampai 2 kali ka berak 💀. Dan yap akhirnya saya melakukannya maaf kalau aku terlalu cepat atau terlalu lama, karena lagi dimasa-masa PTC ki:3.',
  },
  {
    id: '7',
    date: '> 2026',
    title: 'Dan Seterusnya',
    image: '/assets/date/tahun_baru_petasan.png',
    description: 'Banyak event yang sudah kita lakukan, terutama pas tahun baru. Wah asli tidak nyangka bakalan seseru ini tahun baru ku. Tidak sesuram tahun-tahun sebelumnya. Aseli terimakasih banget Ssaaacchii kusayang ki :3',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <StartSection />
      <Timeline events={timelineEvents} />
      <EventsSection />
      {/* <AlbumSection /> */}
      {/* <MessagesSection /> */}
      <LastSection />

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-background/50 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Bismillah langgeng sampai akhir hayat
            </span>
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Damar & Sachi
          </p>
        </div>
      </footer>
    </main>
  )
}
