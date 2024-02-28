interface HeadingFourType {
  content: string
  className?: string
}

export default function HeadingFour ({ content, className }: HeadingFourType): JSX.Element {
  return (
    <>
      <h4 className={className}>{content}</h4>
    </>
  )
}
