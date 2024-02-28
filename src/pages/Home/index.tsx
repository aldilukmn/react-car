import { Navbar } from '../../components'
import { Banner, FAQ, Jumbotron, OurServices, Testimonial, WhyUs } from '../../components/organisms'

export default function Home (): JSX.Element {
  return (
    <>
      <div className='relative overflow-hidden max-w-[1400px] mx-auto'>
        <Navbar/>
        <Jumbotron />
        <OurServices />
        <WhyUs />
        <Testimonial />
        <Banner />
        <FAQ/>
      </div>
    </>
  )
}
