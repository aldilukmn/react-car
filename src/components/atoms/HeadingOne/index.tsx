interface HeadingOneProps {
  content: string
  customStyle?: string
}

export default function HeadingOne ({ content, customStyle }: HeadingOneProps): JSX.Element {
  return (
    <>
      <h1 className={`font-bold text-3xl ${customStyle}`}>{content}</h1>
    </>
  )
}
