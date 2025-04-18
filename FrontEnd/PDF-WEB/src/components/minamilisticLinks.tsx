import { Link } from 'react-router-dom'

interface MinimalisticLinkProps {
  to: string;
  text?: string;
  className?: string;
}

const MinimalisticLinks = ({ to, text, className = '' }: MinimalisticLinkProps) => {
  return (
    <Link 
      to={to} 
      className={`text-gray-800 text-s tracking-wider font-medium hover:text-gray-600 transition-colors duration-300 ${className}`}
    >
      {text || to}
    </Link>
  )
}

export default MinimalisticLinks