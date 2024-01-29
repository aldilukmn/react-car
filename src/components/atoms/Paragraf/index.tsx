interface ParagrafProps {
  content: string
  className?: string
}

export default function Paragraf ({ content, className }: ParagrafProps): JSX.Element {
  return (
    <>
      <p className={className}>{content}</p>
    </>
  )
}
