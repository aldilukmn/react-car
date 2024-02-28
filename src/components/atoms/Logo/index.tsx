interface LogoProps {
  src: string
  alt: string
  className?: string
}

export default function Logo ({ src, alt, className }: LogoProps): JSX.Element {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  )
}
