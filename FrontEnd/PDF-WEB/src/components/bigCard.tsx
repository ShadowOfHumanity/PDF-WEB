import { ReactNode } from 'react';

interface BigCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const BigCard = ({ children, title, className = '' }: BigCardProps) => {
  return (
    <div className={`bg-[#D3D3D3] rounded-xl p-6 shadow-md ${className}`}>
      {title && <h2 className="text-xl font-medium mb-4 text-gray-800">{title}</h2>}
      <div>
        {children}
      </div>
    </div>
  );
};

export default BigCard;