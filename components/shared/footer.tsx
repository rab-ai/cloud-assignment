'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className='bg-black text-white underline-link'>
      <div className='w-full'>
        {/* Sayfanın başına dönme butonu */}
        <Button
          variant='ghost'
          className='bg-gray-800 w-full rounded-none'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
      </div>
    </footer>
  )
}
