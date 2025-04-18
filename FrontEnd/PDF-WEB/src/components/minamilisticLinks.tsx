import { Link } from 'react-router-dom'

interface MinimalisticLinkProps {
  to: string;
  text?: string;
}

const MinimalisticLinks = ({ to, text }: MinimalisticLinkProps) => {
  return (
    <Link to={to} className="text-gray-800 ml-2 text-s tracking-wider font-medium hover:text-gray-600 transition-colors duration-300">
      {text || to}
    </Link>
  )
}

export default MinimalisticLinks