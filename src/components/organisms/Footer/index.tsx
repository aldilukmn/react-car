import { BodyFooter } from '../../molecules'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../config/Redux/store'

export default function Footer (): JSX.Element {
  const getPathLocation = useSelector((state: RootState) => state.pathLocationReducer)
  return (
    <>
      <div className={`py-10 bg-third ${getPathLocation.pathLocation === '/search' ? 'mt-60' : 'mt-20'}`}>
        <BodyFooter/>
      </div>
    </>
  )
}
