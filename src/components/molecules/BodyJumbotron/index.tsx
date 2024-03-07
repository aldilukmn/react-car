import { HeadingOne, Image, NavLink, Paragraf } from '../../atoms'
import imageJumbotron from '../../../assets/img/car-image-jumbotron.png'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../config/Redux/store'

const HeadingOneContent = 'Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)'
const ParagrafContent = 'Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.'
const NavLinkName = 'Mulai Sewa Mobil'

export default function BodyJumbotron (): JSX.Element {
  const getPathLocation = useSelector((state: RootState) => state.pathLocationReducer)
  return (
    <>
      <div className='flex flex-col lg:flex-row mt-44 lg:mt-56 h-[36rem] lg:h-80 mx-5 lg:mx-20'>
        <section className='flex flex-col flex-auto w-full lg:w-64 gap-5'>
          <HeadingOne content={HeadingOneContent} />
          <Paragraf content={ParagrafContent} />
          {
            getPathLocation.pathLocation === '/search'
              ? ''
              : (<>
            <NavLink name={NavLinkName} customStyle={true} to='/search' />
            </>)
          }
        </section>
        <section className='flex-auto w-full lg:w-96'>
          <Image src={imageJumbotron} alt='car-image' className='absolute left-2 md:left-auto md:right-0 bottom-0 lg:w-6/12' />
        </section>
      </div>
    </>
  )
}
