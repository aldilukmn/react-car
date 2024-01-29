import { BodyJumbotron, Navbar } from '../../molecules'

export default function Jumbotron (): JSX.Element {
  return (
    <>
      <div className='relative overflow-hidden bg-gradient-to-t from-[#CFD4ED]'>
        <Navbar />
        <BodyJumbotron/>
      </div>
    </>
  )
}
