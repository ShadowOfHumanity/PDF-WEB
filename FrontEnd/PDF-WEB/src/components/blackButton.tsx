import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  to?: string;  // <-- TO prop already exists
  className?: string;
}

const BlackButton = ({ text, onClick, to, className = '' }: ButtonProps) => {
  const buttonStyle = `bg-black text-white text-s tracking-wider px-6 py-2 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors shadow-sm ${className}`;
  
  // If "to" prop is provided, render a Link (for routing)
  if (to) {
    return (
      <Link to={to} className={buttonStyle}>  
        {text}
      </Link>
    );
  }
  
  // else render regular button
  return (
    <button 
      onClick={onClick}
      className={buttonStyle}
    >
      {text}
    </button>
  );
}

export default BlackButton