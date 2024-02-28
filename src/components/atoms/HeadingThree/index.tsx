interface HeadingThreeType {
  content: string
  className?: string
}

export default function HeadingThree ({ content, className }: HeadingThreeType): JSX.Element {
  return (
    <>
      <h3 className={className}>{content}</h3>
    </>
  )
}
