'use client'

import { useRef, useState } from 'react'
import HTMLFlipBook, { HTMLFlipBookType } from 'react-pageflip'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FlipBookProps {
  images: string[]
  titles: string[]
}

export function FlipBook({ images, titles }: FlipBookProps) {
  const bookRef = useRef<HTMLFlipBookType>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    bookRef.current?.pageFlip().flipPrev()
  }

  const handleNext = () => {
    bookRef.current?.pageFlip().flipNext()
  }

  const handlePageChange = (e: any) => {
    setCurrentIndex(e.data)
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {/* FlipBook Container */}
      <div className="relative w-full max-w-2xl flex justify-center">
        
        <HTMLFlipBook
          width={400}
          height={550}
          size="stretch"
          minWidth={300}
          maxWidth={600}
          minHeight={400}
          maxHeight={800}
          drawShadow
          flippingTime={800}
          usePortrait
          startPage={0}
          onFlip={handlePageChange}
          ref={bookRef}
          className="shadow-2xl rounded-2xl"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center p-4"
            >
              <img
                src={image}
                alt={titles[index]}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Navigation Buttons */}
        <Button
          onClick={handlePrev}
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-primary text-white hover:bg-primary/90 rounded-full h-12 w-12"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          onClick={handleNext}
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-primary text-white hover:bg-primary/90 rounded-full h-12 w-12"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Counter */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">
          {currentIndex + 1} / {images.length}
        </p>
        <p className="text-lg font-medium text-primary">
          {titles[currentIndex]}
        </p>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 justify-center flex-wrap max-w-md">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => bookRef.current?.pageFlip().flip(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-primary/30 w-2 hover:bg-primary/50'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
