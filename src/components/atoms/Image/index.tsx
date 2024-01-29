interface ImageProps {
  src: string
  alt: string
  className?: string
}

export default function Image ({ src, alt, className }: ImageProps): JSX.Element {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  )
}
