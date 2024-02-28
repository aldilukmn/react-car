interface HeadingSixType {
  content: string
  className?: string
}

export default function HeadingSix ({ content, className }: HeadingSixType): JSX.Element {
  return (
    <>
      <h6 className={className}>{content}</h6>
    </>
  )
}
