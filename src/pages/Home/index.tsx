import { Banner, FAQ, OurServices, Testimonial, WhyUs } from '../../components/organisms'

export default function Home (): JSX.Element {
  return (
    <>
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Banner />
      <FAQ />
    </>
  )
}
