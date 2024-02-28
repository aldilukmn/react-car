import { Logo, NavLink } from '../../atoms'
import LogoImg from '../../../assets/img/logo.png'
import { menu } from './hooks'
import { screenSize } from '../../../libs/screenSize'
import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { scrollSize } from '../../../libs/scrollSize'

export default function Navbar (): JSX.Element {
  const { width } = screenSize()
  const { scrollY } = scrollSize()
  const [humbergerMenu, setHumbergerMenu] = useState<boolean>(false)
  const handleHumbergerMenu = (): void => {
    setHumbergerMenu((prev) => !prev)
  }
  return (
    <>
      <div className={`fixed z-[9999] bg-white h-20 w-full ${scrollY >= 100 ? 'shadow-md' : ''}`}></div>
        <Logo src={LogoImg} alt='logo' className='fixed top-6 left-5 lg:left-20 z-[9999]' />
          {
            width >= 1024
              ? (
              <nav className='gap-10 flex fixed top-7 right-5 lg:right-20 z-[9999]'>
              {
                menu.map((val, index) => {
                  const isRegister = val.name === 'Register'
                  const isName = val.name === 'Home' ? '' : val.name
                  return (
                    <div key={index}>
                      <NavLink name={isName} to={val.name.toLowerCase().split(' ').join('-')} customStyle={isRegister} />
                    </div>
                  )
                })
              }
              </nav>
                )
              : (
              <>
                <button onClick={handleHumbergerMenu} className={`duration-300 fixed top-6 z-[9999] ${humbergerMenu ? 'right-3 opacity-0' : 'right-3'}`}>
                  <Icon icon='material-symbols:menu' width={35}/>
                </button>
                <div>
                  <div className={`bg-black opacity-50 absolute left-0 top-0 bottom-0 w-1/2 md:w-2/3 z-[9999] duration-500 ${humbergerMenu ? '' : '-translate-x-[50rem]'}`} onClick={handleHumbergerMenu}></div>
                  <nav className={`bg-white py-7 w-1/2 md:w-1/3 pl-10 fixed right-0 top-0 bottom-0 duration-500 z-[9999] ${humbergerMenu ? '' : 'translate-x-96'}`}>
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
    </>
  )
}
