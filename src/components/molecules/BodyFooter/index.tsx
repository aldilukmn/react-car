import { Icon } from '@iconify/react/dist/iconify.js'
import { HeadingSix, Logo, NavLink, Paragraf } from '../../atoms'
import { menu } from '../Navbar/hooks'
import { address, copyright, email, numProvide, socMed, titleSocMed } from './data'
import LogoImg from '../../../assets/img/logo.png'

export default function BodyFooter (): JSX.Element {
  return (
    <>
      <section className='mx-5 lg:mx-20 flex flex-col lg:flex-row gap-10 lg:gap-28'>
        <div className='flex flex-col gap-5 flex-initial lg:w-72'>
          <Paragraf content={ address } />
          <Paragraf content={ email } />
          <Paragraf content={ numProvide } />
        </div>
        <div>
          {
            menu.filter(list => !list.name.includes('Home') && !list.name.includes('Register')).map((menu, index) => (
              <div key={index} className={`${menu.name === 'FAQ' ? '' : 'mb-5'}`}>
                <NavLink name={menu.name} to={menu.name.toLocaleLowerCase().split(' ').join('-')} customStyle={menu.name === 'Register'} />
              </div>
            ))
          }
        </div>
        <div>
          <HeadingSix content={titleSocMed} className='mb-5' />
          <section className='flex gap-2'>
            {
              socMed.map((icon, index) => (
                <div key={index} className='p-2 bg-primary rounded-full text-white'>
                  <Icon icon={ icon.name }/>
                </div>
              ))
            }
          </section>
        </div>
        <div>
          <HeadingSix content={copyright} className='mb-5' />
          <Logo src={LogoImg} alt='logo'/>
        </div>
      </section>
    </>
  )
}
