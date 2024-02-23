import { Link } from 'react-router-dom'

interface LinkProps {
  name: string
  to: string
  customStyle: boolean
}

const isStyle = 'bg-secondary px-3 text-white border rounded w-fit'

export default function NavLink ({ name, to, customStyle }: LinkProps): JSX.Element {
  return (
    <>
      <Link to={to} className={`py-2 ${customStyle ? isStyle : ''}`}>{name}</Link>
    </>
  )
}
