import { type Location, Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../../../components'
import { Footer, Jumbotron } from '../../../components/organisms'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../Redux/store'
import { setPathLocation } from '../../Redux/Action'

export default function Public (): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const getLocation: Location = useLocation()
  useEffect(() => {
    dispatch(setPathLocation(getLocation.pathname))
  }, [getLocation])

  return (
    <>
      <div className='relative overflow-hidden max-w-[1400px] mx-auto'>
        <Navbar />
        <Jumbotron />
        <Outlet />
        <Footer/>
      </div>
    </>
  )
}
