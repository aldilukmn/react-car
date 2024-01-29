interface LogoProps {
  src: string
  alt: string
}

export default function Logo ({ src, alt }: LogoProps): JSX.Element {
  return (
    <>
      <img src={src} alt={alt} />
    </>
  )
}
