import { HeadingOne, Image, NavLink, Paragraf } from '../../atoms'
import imageJumbotron from '../../../assets/img/car-image-jumbotron.png'

const HeadingOneContent = 'Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)'
const ParagrafContent = 'Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.'
const NavLinkName = 'Mulai Sewa Mobil'

export default function BodyJumbotron (): JSX.Element {
  return (
    <>
      <div className='flex flex-col lg:flex-row mt-28 lg:mt-44 h-[36rem] lg:h-80 mx-5 lg:mx-20'>
        <section className='flex flex-col flex-auto w-full lg:w-64 gap-5'>
          <HeadingOne content={HeadingOneContent} />
          <Paragraf content={ParagrafContent} />
          <NavLink name={NavLinkName} customStyle={true} to='/' />
        </section>
        <section className='flex-auto w-full lg:w-96'>
          <Image src={imageJumbotron} alt='car-image' className='absolute left-2 md:left-auto md:right-0 bottom-0' />
        </section>
      </div>
    </>
  )
}
