interface HeadingTwoType {
  content: string
  className?: string
}

export default function HeadingTwo ({ content, className }: HeadingTwoType): JSX.Element {
  return (
    <>
      <h2 className={className}>{content}</h2>
    </>
  )
}
