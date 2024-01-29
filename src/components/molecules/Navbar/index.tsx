import { Logo, NavLink } from '../../atoms'
import LogoImg from '../../../assets/img/logo.png'

const menu = [
  { name: 'Home' },
  { name: 'Our Services' },
  { name: 'Why Us' },
  { name: 'Testimonial' },
  { name: 'FAQ' },
  { name: 'Register' }
]

export default function Navbar (): JSX.Element {
  return (
    <>
      <section className='flex items-center justify-between py-5 px-20'>
        <Logo src={LogoImg} alt='logo' />
        <nav className='flex gap-10'>
          {
            menu.map((val, index) => {
              const isRegister = val.name === 'Register'
              return (
                <>
                  <NavLink key={index} name={val.name} to={val.name.toLowerCase().split(' ').join('-')} customStyle={isRegister} />
                </>
              )
            })
          }
        </nav>
      </section>
    </>
  )
}
