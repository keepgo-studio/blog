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
      ${theme === 'line' && 'border-gray-600 border rounded-xl p-6 bg-semi-dark bg-container-pattern'}
      ${theme === 'blank' && 'p-8'}
    `}>{children}</div>
  )
}

export default Container