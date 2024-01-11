import React from 'react'

const Blank = ({
  height = 24
}: {
  height: number | '1rem' | '2rem' | '4rem';
}) => {
  return (
    <div style={{ height: height }}/>
  )
}

export default Blank