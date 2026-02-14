'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Camera, X } from 'lucide-react'

export function AlbumSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    image: string
    title: string
  } | null>(null)

  const albumPhotos = [
    { image: '/assets/albums/0.jpeg', title: 'The Beginning' },
    {
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop',
      title: 'First Adventures',
    },
    {
      image:
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=800&fit=crop',
      title: 'Unforgettable Moments',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop',
      title: 'Together Through It All',
    },
    {
      image:
        'https://images.unsplash.com/photo-1585324662181-54ec2a6ad47f?w=600&h=800&fit=crop',
      title: 'Our Future',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50/50 to-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-pink-500" />
            <span className="text-pink-500 font-semibold text-sm uppercase tracking-wide">
              Our Album
            </span>
            <Camera className="w-6 h-6 text-pink-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Memories We Treasure
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every picture tells a story of us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albumPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-center px-4">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our story continues, and the best chapters are yet to come ❤️
          </p>
        </div>
      </div>

      {/* Modal Preview */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition"
            >
              <X size={32} />
            </button>

            <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain bg-black"
              />
            </div>

            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedPhoto.title}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
