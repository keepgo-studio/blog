import React from 'react'

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  theme?: 'line' | 'blank';
}
const Container = ({ 
  children,
  theme = 'line',
  ...rest
}: ContainerProps) => {
  return (
    <div 
    { ...rest }
    className={ rest.className + `
      ${theme === 'line' && 'border rounded-xl p-6'}
      ${theme === 'blank' && 'p-8'}
    `}>{children}</div>
  )
}

export default Container