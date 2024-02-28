import { Link } from 'react-router-dom'

interface LinkProps {
  name: string
  to: string
  customStyle: boolean
}

const isStyle = 'py-2 bg-secondary px-3 text-white border rounded w-fit border-none'

export default function NavLink ({ name, to, customStyle }: LinkProps): JSX.Element {
  return (
    <>
      <Link to={to} className={` ${customStyle ? isStyle : 'py-1 border-b-none hover:border-b-2 hover:border-secondary duration-100'}`}>{name}</Link>
    </>
  )
}
