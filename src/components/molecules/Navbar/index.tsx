import { Logo, NavLink } from '../../atoms'
import LogoImg from '../../../assets/img/logo.png'
import { menu } from './hooks'
import { screenSize } from '../../../libs/screenSize'
import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Navbar (): JSX.Element {
  const { width } = screenSize()
  const [humbergerMenu, setHumbergerMenu] = useState<boolean>(false)
  const handleHumbergerMenu = (): void => {
    setHumbergerMenu((prev) => !prev)
  }
  return (
    <>
      <section className='flex items-center justify-between py-5 px-5 lg:px-20'>
        <Logo src={LogoImg} alt='logo' />
          {
            width >= 1024
              ? (
              <nav className='gap-10 flex'>
              {
                menu.map((val, index) => {
                  const isRegister = val.name === 'Register'
                  return (
                    <div key={index}>
                      <NavLink name={val.name} to={val.name.toLowerCase().split(' ').join('-')} customStyle={isRegister} />
                    </div>
                  )
                })
              }
              </nav>
                )
              : (
              <>
                <button onClick={handleHumbergerMenu} className={`duration-300 absolute ${humbergerMenu ? 'right-3 opacity-0' : 'right-3'}`}>
                  <Icon icon='material-symbols:menu' width={35}/>
                </button>
                <div>
                  <div className={`bg-black opacity-50 absolute left-0 top-0 bottom-0 w-1/2 md:w-2/3 z-[9999] duration-500 ${humbergerMenu ? '' : '-translate-x-[50rem]'}`} onClick={handleHumbergerMenu}></div>
                  <nav className={`bg-white py-7 w-1/2 md:w-1/3 pl-10 absolute right-0 top-0 bottom-0 duration-500 z-[9999] ${humbergerMenu ? '' : 'translate-x-96'}`}>
                  <button onClick={handleHumbergerMenu} className={`duration-500 absolute ${humbergerMenu ? 'right-5' : 'right-20'}`}>
                    <Icon icon="line-md:menu-to-close-transition" width={25}/>
                  </button>
                  {
                    menu.map((val, index) => {
                      const isRegister = val.name === 'Register'
                      const displayName = val.name === 'Home' ? 'BCR' : val.name
                      return (
                        <div key={index} className={`mb-4 ${displayName === 'BCR' ? 'font-bold' : ''}`}>
                          <NavLink name={displayName} to={val.name.toLocaleLowerCase().split(' ').join('-')} customStyle={isRegister}/>
                        </div>
                      )
                    })
                  }
                </nav>
                </div>
              </>
                )}
      </section>
    </>
  )
}
