import type { ReactNode } from 'react'

interface ButtonType {
  name: string | ReactNode
  className?: string
  onClick: () => void
}

export default function Button ({ name, className, onClick }: ButtonType): JSX.Element {
  return (
    <>
      <button className={className} onClick={onClick}>{name}</button>
    </>
  )
}
