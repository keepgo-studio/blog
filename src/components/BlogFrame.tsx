'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const BlogFrame = () => {
  const params = useParams() as { 
    id: string; 
  };

  return (
    <iframe src="https://www.naver.com/"/>
  )
}

export default BlogFrame