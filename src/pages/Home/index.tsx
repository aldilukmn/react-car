import { Navbar } from '../../components'
import { Jumbotron, OurServices } from '../../components/organisms'

export default function Home (): JSX.Element {
  return (
    <div className='relative'>
      <Navbar/>
      <Jumbotron />
      <OurServices/>
    </div>
  )
}
