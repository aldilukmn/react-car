interface HeadingFiveType {
  content: string
  className?: string
}

export default function HeadingFive ({ content, className }: HeadingFiveType): JSX.Element {
  return (
    <>
      <h5 className={className}>{content}</h5>
    </>
  )
}
