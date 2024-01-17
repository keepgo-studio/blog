'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const BlogFrame = () => {
  const params = useParams() as { 
    id: string; 
  };

  return (
    <iframe 
      className='absolute top-0 left-0 w-full h-full'
      src="https://iougou03.github.io/portfolio/"
    />
  )
}

export default BlogFrame